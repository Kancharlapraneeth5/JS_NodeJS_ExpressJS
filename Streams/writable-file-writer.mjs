import { createWriteStream } from "node:fs";

const writable = createWriteStream("output.txt", { encoding: "utf8" });

for (let i = 0; i < 5; i++) {
  writable.write(`This is line ${i + 1}\n`);
}

writable.on("finish", () => {
  console.log("All data has been written to the file.");
});
