// Example of using the global process object in Node.js - 1
// import dotenv from "dotenv";
// dotenv.config();

// The below is for the CommonJS module system
// require('dotenv').config();

// console.log("PORT:", process.env.PORT);
// console.log("Environment:", process.env.NODE_ENV);

// Example of using the global process object - 2
// Accessing command-line arguments
console.log("Arguments:", process.argv[2].split("=")[1]);

// Current working directory
console.log("CWD:", process.cwd());

// Memory usage
console.log("Memory Usage:", process.memoryUsage());
