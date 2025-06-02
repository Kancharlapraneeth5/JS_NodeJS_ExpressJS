// Executes first - synchronous code
console.log("Start");

// Executes fourth - setTimeout with 0 ms delay is executed in the Timers phase (first phase of the Event Loop)
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// Executes fifth - setImmediate is executed in the Check phase
setImmediate(() => {
  console.log("setImmediate");
});

// Executes third - process.nextTick executes before starting of any Event Loop phase
process.nextTick(() => {
  console.log("process.nextTick");
});

// Executes second - synchronous code
console.log("End");
