// 🔐 Safety Benefit

// Using a temp directory:

// Avoids cluttering your project directory
// Prevents accidental overwrites
// Keeps sensitive or short-term data isolated

// Promise API
import { mkdtemp } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
// This creates a unique temporary folder inside your system’s temp directory with a name starting with "prefix-".
// Ex: C:\Users\YourName\AppData\Local\Temp\prefix-a1b2c3
const tempDir = await mkdtemp(join(tmpdir(), "prefix-"));
console.log("Temporary directory created:", tempDir);

// Sync API
import { mkdtempSync } from "node:fs";
const tempDirSync = mkdtempSync(join(tmpdir(), "prefix-"));
