import { Transform } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";
import split2 from "split2";

const joinToCSV = new Transform({
  // This tells the stream that the input will be JavaScript objects or strings, not raw Buffers.
  writableObjectMode: true,
  // This tells the stream to output raw strings or buffers (CSV lines), not JavaScript objects.
  readableObjectMode: false,
  transform(chunk, encoding, callback) {
    //const json = JSON.parse(chunk.toString());
    const json = JSON.parse(chunk.toString());
    const csv = Object.values(json).join(",") + "\n";
    this.push(csv);
    callback();
  },
});

const readable = createReadStream("products.jsonl", { encoding: "utf8" });
const writable = createWriteStream("output.csv", { encoding: "utf8" });

// We are using splitz2 to split the input JSONL file into individual lines
// without this we end up stream reading one and some part of the next line
// and the transform function will not work as expected.
readable.pipe(split2()).pipe(joinToCSV).pipe(writable);

readable.on("end", () => {
  console.log("Finished reading JSON file.");
});

writable.on("finish", () => {
  console.log("All data has been transformed to CSV and written to the file.");
});
