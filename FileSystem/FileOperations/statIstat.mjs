// Promises API
import { stat, lstat, symlink } from "node:fs/promises";
// the below is the actual file created in the windows GUI (by default it is not a symbolic link)
const stats = await stat(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_2.txt"
);
// the below details gives us the information about the file itself (original file), not the symbolic link
console.log("File isFile:", stats.isFile());
console.log("File isDirectory:", stats.isDirectory());
console.log("File isSymbolicLink:", stats.isSymbolicLink());
console.log("File size:", stats.size);
console.log("File created at:", stats.birthtime);
console.log("File modified at:", stats.mtime);
console.log("File accessed at:", stats.atime);

// Now we will create a symbolic link to the above file (it can also be done using CLI command `mklink` in Windows)
// here we are doing it using Node.js API
await symlink(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_2.txt",
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Link.txt"
);
console.log("✅ Symbolic link created");

// Now we will get the stats of the symbolic link created above, not about the original file
// In short with `lstat` we can get the stats of the symbolic link itself (the shortcut of the original file)
const linkStats = await lstat(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Link.txt"
);

console.log("Link isFile:", linkStats.isFile());
console.log("Link isDirectory:", linkStats.isDirectory());
console.log("Link isSymbolicLink:", linkStats.isSymbolicLink());
console.log("Link size:", linkStats.size);
console.log("Link created at:", linkStats.birthtime);

// Synchronous API
import { statSync, lstatSync, symlinkSync } from "node:fs";

const statsSync = statSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt"
);

// the below details gives us the information about the file itself (original file), not the symbolic link
console.log("File isFile:", statsSync.isFile());
console.log("File isDirectory:", statsSync.isDirectory());
console.log("File isSymbolicLink:", statsSync.isSymbolicLink());
console.log("File size:", statsSync.size);
console.log("File created at:", statsSync.birthtime);
console.log("File modified at:", statsSync.mtime);
console.log("File accessed at:", statsSync.atime);

symlinkSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Link_1.txt"
);
console.log("✅ Symbolic link created");

const linkStatsSync = lstatSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Link_1.txt"
);

console.log("Link isFile:", linkStatsSync.isFile());
console.log("Link isDirectory:", linkStatsSync.isDirectory());
console.log("Link isSymbolicLink:", linkStatsSync.isSymbolicLink());
console.log("Link size:", linkStatsSync.size);
console.log("Link created at:", linkStatsSync.birthtime);
