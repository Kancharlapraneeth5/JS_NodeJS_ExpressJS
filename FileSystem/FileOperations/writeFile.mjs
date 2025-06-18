// Promises API (Asynchronous)
import { writeFile } from "node:fs/promises";

(async () => {
  await writeFile(
    "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_2.txt",
    "Hello, World! from Promises API!"
  );
})();

// Callback API (Asynchronous)
import { writeFile as cbWriteFile } from "node:fs";

cbWriteFile(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_2.txt",
  "Hello, World! from Callback API!",
  (err) => {
    if (err)
      // throw error;
      console.log("✅ File written with callback API");
  }
);

// Sync
import { writeFileSync } from "node:fs";
writeFileSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_2.txt",
  "Hello, World! from Sync API!"
);
