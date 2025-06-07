// The below illustrates about the circular dependency in CommonJS modules:

const b = require("./b.cjs");

console.log("In a.js, b.done =", b.done);

module.exports.done = true;
