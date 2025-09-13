import { createReadStream } from "node:fs";

const readable = createReadStream("input.txt", { encoding: "utf8" });

readable.on("data", (chunk) => {
  console.log(`The data is: ${chunk}`);
  console.log(`Received ${chunk.length} bytes of data.`);
});

readable.on("end", () => {
  console.log("No more data to read.");
});
