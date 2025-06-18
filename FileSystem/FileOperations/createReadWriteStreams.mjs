// We don't have a synchronous way to read and write streams in Node.js, as streams are inherently asynchronous.

// Asynchronous file operations using streams in Node.js
import { createReadStream, createWriteStream } from "node:fs";

const reader = createReadStream(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\ReadStream.txt"
);
const writer = createWriteStream(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\WriteStream.txt"
);

// like the below we do have some events like data, end, error, close etc.,
reader.on("data", (chunk) => {
  console.log("Received chunk:", chunk.toString());
});

reader.on("end", () => {
  console.log("No more data to read.");
});
// pipe or pipeline can only be applied to readable and writable streams
reader.pipe(writer);

// Asynchronous file operations using streams with await in Node.js
import { pipeline } from "node:stream/promises";

try {
  await pipeline(
    createReadStream(
      "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\ReadStream.txt"
    ),
    createWriteStream(
      "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\WriteStream.txt"
    )
  );
  console.log("✅ Pipeline completed successfully");
} catch (error) {
  console.error("❌ Pipeline failed:", error);
}
