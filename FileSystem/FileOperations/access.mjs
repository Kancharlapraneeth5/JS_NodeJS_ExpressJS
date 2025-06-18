// Promises API
import { access, constants } from "node:fs/promises";
await access(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  constants.F_OK | constants.R_OK
);

// Callback
import { access as cbAccess, constants as cbConstants } from "node:fs";
cbAccess(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  cbConstants.W_OK,
  (err) => {
    console.log(err ? "Not accessible" : "Accessible");
  }
);

// Sync
import { accessSync, constants as fsConstants } from "node:fs";
accessSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  fsConstants.F_OK
);
