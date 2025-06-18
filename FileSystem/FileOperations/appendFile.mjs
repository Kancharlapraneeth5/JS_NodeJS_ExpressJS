// Promises API (Asynchronous)
import { appendFile } from "node:fs/promises";

(async () => {
  await appendFile(
    "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_2.txt",
    "Appended content from promise API\n"
  );
})();

// Callback API (Asynchronous)
import { appendFile as cbAppendFile } from "node:fs";
cbAppendFile(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_2.txt",
  "Appended content from callback API\n",
  (err) => {
    if (err) throw err;
    console.log("✅ File appended with callback API");
  }
);

// Synchronous API
import { appendFileSync } from "node:fs";
appendFileSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_2.txt",
  "Appended content from synchronous API\n"
);
