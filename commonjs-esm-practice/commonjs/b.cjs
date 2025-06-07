// The below illustrates about the circular dependency in CommonJS modules:

const a = require("./a.cjs");

console.log("In b.js, a.done =", a.done);

module.exports.done = true;
