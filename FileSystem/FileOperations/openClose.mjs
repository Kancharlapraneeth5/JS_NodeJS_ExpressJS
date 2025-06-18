// The open and close methods are mainly used when we work with buffers.

// Promises API
import { open } from "node:fs/promises";
const file = await open(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  "r"
);
await file.close();

// Sync
import { openSync, closeSync } from "node:fs";
const fd = openSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  "r"
);
closeSync(fd);
