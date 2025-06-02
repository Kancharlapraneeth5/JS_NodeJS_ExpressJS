// Blocking code
const fs = require("fs");

console.log("Start blocking");

// Synchronous file read
// Note: This will block the callStack until the file is read completely
const data = fs.readFileSync(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt"
);

console.log("Data read from file:", data.toString());

console.log("Read file synchronously");

console.log("End blocking");

// Non-blocking code
console.log("Start non-blocking");

// Asynchronous file read
// Note: This will not block the callStack, allowing other operations to execute while the file is being read
fs.readFile(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  (err, data) => {
    console.log("Read file asynchronously");
    console.log("Data read from file:", data.toString());
  }
);

console.log("End non-blocking");
