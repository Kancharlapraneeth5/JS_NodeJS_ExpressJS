// Promises API
import { readFile } from "node:fs/promises";
(async () => {
  const data = await readFile(
    "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
    "utf8"
  );
  console.log("Promise " + data);
})();

// Callback API
import { readFile as cbReadFile } from "node:fs";
cbReadFile(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log("callback " + data);
  }
);

// Sync API
import { readFileSync } from "node:fs";
const syncData = readFileSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
  "utf8"
);
console.log("Sync " + syncData);
