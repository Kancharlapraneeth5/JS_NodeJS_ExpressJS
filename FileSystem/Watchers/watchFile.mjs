// Only Asynchronous API
// because watching is a long-running, non-blocking task — not something you “do once and finish.”
import { watch, watchFile } from "node:fs";

// Listens for changes like 'rename' or 'change'
// The callback runs when any change is detected
watch(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  (eventType, filename) => {
    console.log(`${filename} changed via ${eventType}`);
  }
);

watchFile(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  (curr, prev) => {
    console.log("File modified at:", curr.mtime);
  }
);
