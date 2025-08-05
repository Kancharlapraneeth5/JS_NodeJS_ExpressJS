import { Transform } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    // Callback tells Node.js that this chunk is processed and it can continue
    // without this the stream will be paused until the callback is called
    callback();
  },
  // flush is called when all data has been processed (OPTIONAL)
  // Node.js will provide the callback parameter to signal that the stream is done
  flush(callback) {
    console.log("Transform stream has finished processing all data.");
    callback();
  },
});

const readable = createReadStream("input.txt", { encoding: "utf8" });
const writable = createWriteStream("output.txt", { encoding: "utf8" });

readable.pipe(transformStream).pipe(writable);

readable.on("end", () => {
  console.log("Finished reading input file.");
});

writable.on("finish", () => {
  console.log("All data has been transformed and written to the file.");
});
