// Asynchronous file read example using top-level await (await outside of a async function)
// top-level await blocks the code execution until the promise is resolved but not the event loop
// so the event loop can still process other events like timers etc.,
import { readFile } from "node:fs/promises";

console.log("Start");

setTimeout(() => {
  console.log("⏰ Timer 1 Finished");
}, 0);

const data_async = await readFile(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  "utf8"
);
console.log("✅ File read with top-level await" + data_async);

// Synchronous file read example
// the synchronous file read blocks the code execution and event loop until the file is read
import { readFileSync } from "node:fs";

console.log("Start");

setTimeout(() => {
  console.log("⏰ Timer 1 Finished");
}, 0);

const data_sync = readFileSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  "utf8"
);
console.log("✅ File read synchronously" + data_sync);
