// Promise API
import { rm } from "node:fs/promises";
// {recursive: true}: Ensures to delete even the non-empty folder (directory)
// {force: true}: Suppresses errors if the file/folder does not exist
await rm(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\Dummy",
  { recursive: true, force: true }
);

// Sync API
import { rmSync } from "node:fs";
rmSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\DirectorySyncTest",
  { recursive: true, force: true }
);
