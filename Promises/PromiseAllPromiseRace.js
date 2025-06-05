function fakeTask(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} done`);
      resolve(name);
    }, delay);
  });
}

// Output order will be based on timing, but all must finish before .all() resolves.
async function runAll() {
  const results = await Promise.all([
    fakeTask("Task 1", 1000),
    fakeTask("Task 2", 1500),
    fakeTask("Task 3", 500),
  ]);

  console.log("All results:", results);
}

// runAll();

// Only the fastest task wins, others still run to complete but their results will be ignored.
async function runRace() {
  const winner = await Promise.race([
    fakeTask("Task A", 1000),
    fakeTask("Task B", 500),
    fakeTask("Task C", 1500),
  ]);

  console.log("Winner:", winner);
}

runRace();
