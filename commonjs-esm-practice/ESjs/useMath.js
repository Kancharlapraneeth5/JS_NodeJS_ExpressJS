//🧠 Rule:
// Default imports are written outside of the curly braces.
// Named imports are written inside the curly braces.

// In the place of multiply we can write any name, but it is a good practice
// to use the same name as the exported function.
import multiply, { add, subtract } from "./math.js";

console.log("Addition:", add(5, 3)); // 8
console.log("Subtraction:", subtract(5, 3)); // 2
// what name we use here doesn't matter, as long as it matches the default export
console.log("Multiplication:", multiply(5, 3)); // 15
