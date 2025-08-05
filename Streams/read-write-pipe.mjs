import { createReadStream, createWriteStream } from "node:fs";

const readable = createReadStream("input.txt", { encoding: "utf8" });
const writable = createWriteStream("output.txt", { encoding: "utf8" });

// Pipe the readable stream to the writable stream simultaneously
// This will read from 'input.txt' and write to 'output.txt'
readable.pipe(writable);

writable.on("finish", () => {
  console.log("All data has been written to the file.");
});
