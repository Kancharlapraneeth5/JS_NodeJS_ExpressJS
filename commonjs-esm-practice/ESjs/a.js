// with the below code we get REFERENCE ERROR: Cannot access 'b' before initialization
// Because ES Modules are strict about circular dependencies and do not allow access to uninitialized bindings. This is different from CommonJS.

// When Node.js starts loading a.mjs, it sees that it imports b.mjs. While loading b.mjs, it sees that it imports a.mjs again. But a.mjs hasn’t finished defining done yet — so when b.mjs tries to access a.done, it crashes.

// Refer the prepared doc, section bindings....

// CODE:
// import * as b from "./b.mjs";

// console.log("In a.mjs, b.done =", b.done);

// export const done = true;

// Why the below code works fine??

// ⚙️ Why This Works
// Using await import() defers loading until runtime

// At runtime, both modules will have fully initialized exports

// You avoid accessing uninitialized bindings

export const done = true;

export async function logB() {
  const b = await import("./b.js");
  console.log("In a.mjs, b.done =", b.done);
}
