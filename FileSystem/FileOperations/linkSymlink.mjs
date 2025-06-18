// Promise API
import { link, symlink } from "node:fs/promises";
// The below is for the hard link (analogy: pass by value)
await link("source.txt", "hardlink.txt");
// The below is for the soft link (analogy: pass by reference)
await symlink("source.txt", "softlink.txt");

// Sync API
import { linkSync, symlinkSync } from "node:fs";
linkSync("source.txt", "hardlink.txt");
symlinkSync("source.txt", "softlink.txt");
