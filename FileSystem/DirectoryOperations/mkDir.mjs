// Promise API
import { mkdir } from "node:fs/promises";
await mkdir(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\DirectoryAsyncTest",
  // { recursive: true }: Ensures that if any parent folders don’t exist, they will also be created
  // await mkdir("parent/child", { recursive: true }); -- Don't throw an error if the parent directory didn't exists as it creates that as well
  // await mkdir("parent/child") -- Throws an error if the parent directory doesn't exist
  // await mkdir("parent/child", { recursive: false }); -- Throws an error if the parent directory doesn't exist
  { recursive: true }
);

// Sync API
import { mkdirSync } from "node:fs";
mkdirSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\DirectorySyncTest\\SyncTest",
  { recursive: true }
);
