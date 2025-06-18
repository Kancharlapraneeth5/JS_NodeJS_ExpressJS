// Promise API
import { copyFile, rename, unlink } from "node:fs/promises";
await copyFile("original.txt", "copy.txt");
await rename("copy.txt", "renamed.txt");
// Delete the file from file system
await unlink("renamed.txt");

// Sync API
import { copyFileSync, renameSync, unlinkSync } from "node:fs";
copyFileSync("original.txt", "copy.txt");
renameSync("copy.txt", "renamed.txt");
unlinkSync("renamed.txt");
