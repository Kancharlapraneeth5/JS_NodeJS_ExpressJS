add = (a, b) => a + b;
subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;

// We can export named exports and a default export in CommonJS
// in a single object or individually as below commented.

// module.exports.add = (a,b) => a + b;
// module.exports.subtract = (a,b) => a - b;
// module.exports.default = (a,b) => a * b;
module.exports = {
  add,
  subtract,
  default: multiply,
};
