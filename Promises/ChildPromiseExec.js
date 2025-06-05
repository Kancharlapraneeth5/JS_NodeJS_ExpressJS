const { exec } = require("child_process");

// Promise wrapper
function execCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) return reject(error);
      if (stderr) return reject(stderr);
      resolve(stdout);
    });
  });
}

// Usage with async/await
async function run() {
  try {
    const result = await execCommand("node -v");
    console.log("Node version:", result);
  } catch (err) {
    console.error("Error running command:", err);
  }
}

run();
