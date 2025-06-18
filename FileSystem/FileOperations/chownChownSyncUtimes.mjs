// Promise API
import { chmod, chown, utimes } from "node:fs/promises";
// Refer the doc for permissions
await chmod(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  0o755
);
// the below doesn't have any effect on Windows as UID/GID concepts don’t apply like in POSIX systems (Linux/macOs).
await chown(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  process.getuid(),
  process.getgid()
);
// First date: atime (last accessed)
// Second date: mtime (last modified)
await utimes(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  new Date(),
  new Date()
);

// Sync API
import { chmodSync, chownSync, utimesSync } from "node:fs";
chmodSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  0o400
);
// the below doesn't have any effect on Windows as UID/GID concepts don’t apply like in POSIX systems (Linux/macOs).
chownSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  process.getuid(),
  process.getgid()
);
utimesSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  new Date(),
  new Date()
);
