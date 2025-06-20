// Promise API
import { opendir } from "node:fs/promises";
const dir = await opendir(".");
// We are using await to iterate over the directory entries because opendir returns an AsyncIterableIterator. (opens a handle to the directory)
for await (const entry of dir) {
  console.log(entry.name);
}

// No Sync API available for opendir
