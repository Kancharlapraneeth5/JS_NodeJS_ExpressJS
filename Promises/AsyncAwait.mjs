// Example - 1
async function greet() {
  // Even though it returns a plain string, greet() is implicitly returning a Promise.
  return "Hello, World!";
}

greet().then(console.log); // Output: Hello, World!

// Example - 2
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { name: "Sunny", age: 30 };
      resolve(user);
    }, 1000);
  });
}

async function displayUser() {
  try {
    const user = await getUser();
    console.log(`User: ${user.name}, Age: ${user.age}`);
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}

displayUser(); // Output after 1 second: User: Sunny, Age: 30

// Example - 3
async function sequential() {
  const first = await Promise.resolve("First");
  const second = await Promise.resolve("Second");

  console.log(first, second); // Output: First
}

sequential(); // Output: First Second

// Example - 4
async function parallel() {
  const results = await Promise.all([
    Promise.resolve("First"),
    Promise.resolve("Second"),
  ]);
  console.log(results); // Output: [ 'First', 'Second' ]
}

parallel(); // Output: [ 'First', 'Second' ]

// Example - 5 (real-time example with file operations)
import { readFile, writeFile } from "node:fs/promises";

async function processFile() {
  try {
    const data = await readFile(
      "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
      "utf8"
    );
    const upper = data.toUpperCase();
    await writeFile(
      "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test_1.txt",
      upper
    );
    console.log("File processed successfully.");
  } catch (err) {
    console.error("Error processing file:", err);
  }
}

processFile(); // Output: File processed successfully or Error processing file: [error message]
