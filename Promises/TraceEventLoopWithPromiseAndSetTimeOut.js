// Executes first — this is synchronous code
console.log("Script start");

// Schedules a macrotask (timer) to run after all synchronous and microtasks are done
// Executes seventh — as part of the macrotask queue
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// Schedules a microtask during the current execution phase
// Executes fourth — as part of the microtask queue
Promise.resolve().then(() => {
  console.log("Promise then");
});

(async () => {
  // Executes second — this is synchronous code
  console.log("Async function start");

  // Schedules a microtask via `.then()` after resolving the Promise
  // Executes fifth — after previous microtasks, before macrotasks
  await Promise.resolve().then(() =>
    console.log("Promise inside async function await!")
  );

  // The below is the correct usage ✅
  // `then()` should receive a function to defer execution until Promise resolution
  // ❌ Avoid calling `console.log()` directly in `then()` — it executes immediately

  // Even though this line is syntactically after `await`, it's scheduled as a microtask
  // Executes sixth — still a microtask, after the previous one
  console.log("After await");
})();

// Executes third — this is synchronous code
console.log("Script end");
