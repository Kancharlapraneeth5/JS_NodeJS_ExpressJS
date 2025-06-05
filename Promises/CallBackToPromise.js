// Callback version
// const fs = require("fs");
// fs.readFile(
//   "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
//   "utf8",
//   (err, data) => {
//     if (err) return console.error(err);
//     console.log(data);
//   }
// );

// Promise version
// fs.readFile from Node.js core doesn't return a Promise by default — it uses a callback-based API.
// To use Promises with fs.readFile
const fs = require("fs").promises;
fs.readFile(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  "utf8"
)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// Promises with async/await
async function readFileAsync() {
  try {
    const data = await fs.readFile(
      "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
      "utf8"
    );
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

readFileAsync();
