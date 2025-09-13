import * as readline from "readline";
import { createReadStream } from "node:fs";

// Create a readable stream from the file
const stream = createReadStream("largeFile.txt", { encoding: "utf8" });

const rl = readline.createInterface({
  input: stream,
  crlfDelay: Infinity,
});

let lineCount = 0;

rl.on("line", (line) => {
  lineCount++;
  console.log(`Line ${lineCount}: ${line}`); // Optional: log each line
});

rl.on("close", () => {
  console.log(`Total number of lines: ${lineCount}`);
});
