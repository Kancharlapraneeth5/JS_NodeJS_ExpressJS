import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 1. Read the real image file
const imagePath = join(__dirname, "BufferTest.jpeg");

// Read image into buffer
const imgBuffer = readFileSync(imagePath); // Any image file

console.log("Buffer length:", imgBuffer.length);
console.log("First 10 bytes:", imgBuffer.slice(0, 10));

// Write buffer to a new file
writeFileSync("copy_logo.jpeg", imgBuffer);
console.log("Image copied using Buffer!");
