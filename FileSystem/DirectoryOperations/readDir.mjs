// Promise API
import { readdir } from "node:fs/promises";
const items = await readdir(".", { withFileTypes: true });
console.log(items.isDirectory); // true if the current directory is a directory
console.log(items.isFile); // true if the current directory is a file
console.log(items.isSymbolicLink); // true if the current directory is a symbolic link
console.log(items.name); // name of the current directory
// the possible approaches to read a directory in Node.js
// await readdir('..'); // one level up
// await readdir('C:/Users/YourName/Desktop/logs');
// await readdir('./logs/2025'); // relative to current directory

// CommonJS
// import path from 'node:path';
// await readdir(path.join(__dirname, 'data'));

// ES Module
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("the dirname is: ", __dirname);
// Join any directory with the current directory (folder)
await readdir(join(__dirname, "data"));

// Sync API
import { readdirSync } from "node:fs";
const itemsSync = readdirSync(".", { withFileTypes: true });
console.log(itemsSync.isDirectory); // true if the current directory is a directory
console.log(itemsSync.isFile); // true if the current directory is a file
console.log(itemsSync.isSymbolicLink); // true if the current directory is a symbolic link
console.log(itemsSync.name); // name of the current directory
