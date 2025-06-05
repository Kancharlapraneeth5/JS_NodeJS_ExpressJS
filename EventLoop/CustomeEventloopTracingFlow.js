const fs = require("fs");

// Executes first - synchronous code is executed immediately
console.log("start");

// Executes third - process.nextTick callbacks are executed immediately
// after the current operation completes, **before** the event loop continues
process.nextTick(() => console.log("nextTick 1"));

// Executes fourth - Promise `.then()` also goes into the microtask queue
// and executes **after process.nextTick**, but still before timers
Promise.resolve().then(() => console.log("promise resolved"));

// Executes fifth - scheduled in the Timers phase of the **first** iteration of the event loop
setTimeout(() => {
  console.log("timeout 1");
}, 0);

// Executes sixth - scheduled in the Check phase of the **first** iteration of the event loop
setImmediate(() => console.log("immediate 1"));

// Asynchronously reads a file - I/O callbacks are handled in the Poll phase.
// This callback will execute in the **second** iteration of the event loop.
fs.readFile(
  "C:\\Users\\Kancharla.Praneeth\\OneDrive - Solera Holdings, Inc\\Desktop\\JS_Test.txt",
  () => {
    // Executes seventh - synchronous part of the I/O callback runs immediately
    console.log("I/O finished");

    // Executes tenth - setTimeout is scheduled for the Timers phase of the **third** iteration
    setTimeout(() => console.log("timeout inside I/O"), 0);

    // Executes ninth - setImmediate is scheduled for the Check phase of the **second** iteration
    setImmediate(() => console.log("immediate inside I/O"));

    // Executes eighth - process.nextTick is executed immediately
    // after the current I/O callback, before re-entering the event loop
    process.nextTick(() => console.log("nextTick inside I/O"));
  }
);

// Executes second - more synchronous code
console.log("end");
