// Step functions returning Promises that resolve after a 500ms delay
function stepOne(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete"); // Executes after 500ms (macrotask/timer)
      resolve(data + " A"); // Resolves the promise, queues the next .then or resumes await
    }, 500);
  });
}

function stepTwo(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 complete"); // Executes after another 500ms
      resolve(data + " B"); // Queues next .then or resumes await
    }, 500);
  });
}

function stepThree(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 3 complete"); // Executes after another 500ms
      resolve(data + " C"); // Queues final .then or resumes await
    }, 500);
  });
}

// ---------- Promise chaining (without async/await) ----------
// ERROR HANDLING: with .catch() at the end of the chain
stepOne("Start") // This call starts immediately (sync), sets up a timer
  .then((result) => {
    // This runs after the first promise resolves (i.e., after 500ms)
    // Queued as a microtask after the timer fires
    return stepTwo(result);
  })
  .then((result) => {
    // After second timer (1000ms total), this microtask runs
    return stepThree(result);
  })
  .then((final) => {
    // After third timer (1500ms total), prints final result
    console.log("Final result:", final);
  })
  .catch(console.error); // If any promise rejects, error is caught here

// ---------- Async/await style (function is scheduled immediately) ----------
// ERROR HANDLING: with try/catch inside the async function
async function runSteps() {
  try {
    let result = await stepOne("Start"); // Same as above — starts 500ms timer
    result = await stepTwo(result); // Waits for another 500ms
    result = await stepThree(result); // Waits for another 500ms
    console.log("Final result:", result); // Runs after total 1500ms
  } catch (err) {
    console.error("Error:", err); // Catches errors like .catch()
  }
}

runSteps(); // Invoked immediately, starts second parallel chain

//  Time	                  Event
//  0ms	             Both stepOne("Start") calls made; two timers set
// ~500ms	         First "Step 1 complete" (promise chain), then second (async)
// ~1000ms	         First "Step 2 complete" (promise chain), then second (async)
// ~1500ms	         First "Step 3 complete" → final log, then second

// What Happens at Each Phase ????????????????

// At time 0:

// Both stepOne("Start") calls are made (from chaining & async/await)

// They each schedule a setTimeout(..., 500) → goes into macrotask queue

// At time 500ms:

// First timers fire (stepOne resolves)

// Each .then(...) (or await) is queued as a microtask

// Microtasks run immediately after current macrotask → call stepTwo

// At 1000ms:

// stepTwo's timers fire

// stepThree gets queued via microtasks

// At 1500ms:

// stepThree's timers fire

// Final .then() and await calls log result

// REFER THE BELOW TABLE FOR A DETAILED FLOW OF EXECUTION OF ABOVE CODE
// This table illustrates the flow of execution, showing how macrotasks and microtasks are processed in the event loop.

// Time (ms)   | Call Stack        | Macrotask Queue         | Microtask Queue       | Output
// ------------|-------------------|-------------------------|------------------------|-----------------------
// 0           | stepOne("Start")  | setTimeout(stepOne,500) |                        |
//             | runSteps()        | setTimeout(stepOne,500) |                        |
// ------------|-------------------|-------------------------|------------------------|-----------------------
// 500         |                   | stepOne -> complete     | .then(stepTwo) x2      | Step 1 complete (x2)
//             |                   | setTimeout(stepTwo,500) |                        |
// ------------|-------------------|-------------------------|------------------------|-----------------------
// 1000        |                   | stepTwo -> complete     | .then(stepThree) x2    | Step 2 complete (x2)
//             |                   | setTimeout(stepThree,500)|                       |
// ------------|-------------------|-------------------------|------------------------|-----------------------
// 1500        |                   | stepThree -> complete   | .then(console.log) x2  | Step 3 complete (x2)
//                                                                       | Final result: Start A B C (x2)
