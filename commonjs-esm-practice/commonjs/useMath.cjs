const { add, subtract } = require("./math.cjs");
const multiply = require("./math.cjs").default;

console.log("Addition:", add(5, 3)); // 8
console.log("Subtraction:", subtract(5, 3)); // 2

// what name we use here doesn't matter, as long as it matches the default export
console.log("Multiplication:", multiply(5, 3)); // 15
