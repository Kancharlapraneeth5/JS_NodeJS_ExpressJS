const fs = require("fs").promises;

// 🟢 Synchronous Code - executes first
console.log("🛎️ Customer walks in"); // Logs immediately during the initial execution phase

// 📌 Microtask - executes after current synchronous code
process.nextTick(() => {
  // Schedules an urgent microtask that runs right after the current call stack is cleared
  console.log("🧠 process.nextTick - urgent microtask");
});

// 📌 Microtask - executes after current synchronous code (after nextTick)
Promise.resolve().then(() => {
  // Schedules a Promise resolution to run after nextTick tasks
  console.log("✨ Promise.then - scheduled microtask");
});

// ⏰ Macrotask (Timer Phase) - executes in the timers phase of the Event Loop
setTimeout(() => {
  // Runs after all microtasks and once the timers phase is reached
  console.log("☕ Coffee prepared after a short wait (setTimeout)");
}, 0);

// ⏳ Macrotask (Check Phase) - executes after I/O callbacks
setImmediate(() => {
  // Scheduled to run after the poll phase, typically after file I/O if one is present
  console.log("📋 Waiter checks schedule (setImmediate)");
});

// 🔁 Recurring Macrotask (Timer Phase) - executes repeatedly at fixed intervals
const interval = setInterval(() => {
  // Repeats every 2 seconds unless cleared — simulating temperature monitoring
  console.log("🌡️ Checking oven temperature (setInterval)");
}, 2000);

// 📄 Asynchronous I/O operation - file read using Promise-based fs
fs.readFile(
  "C\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  "utf8"
)
  .then((data) => {
    // Executes after file is successfully read (I/O callback + microtask queue)
    if (!data) {
      throw new Error("File is empty or not found");
    } else {
      console.log("📄 Read customer order from file:");
      console.log(data);
      clearInterval(interval); // Stop the recurring interval
    }
  })
  .catch((err) => {
    // Executes if reading the file fails
    console.error("Error reading file:", err);
    clearInterval(interval); // Stop the recurring interval in case of error
  });

// 🟢 Synchronous Code - executes immediately
console.log("🧾 Taking customer order..."); // Runs right after the first console.log
