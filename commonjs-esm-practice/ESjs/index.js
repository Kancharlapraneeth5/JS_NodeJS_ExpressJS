// with the below code we get REFERENCE ERROR: Cannot access 'b' before initialization
// Because ES Modules are strict about circular dependencies and do not allow access to uninitialized bindings. This is different from CommonJS.

// When Node.js starts loading a.mjs, it sees that it imports b.mjs. While loading b.mjs, it sees that it imports a.mjs again. But a.mjs hasn’t finished defining done yet — so when b.mjs tries to access a.done, it crashes.

// Refer the prepared doc, section bindings....

// CODE:
// import "./a.mjs";

// Why the below code works fine??

// ⚙️ Why This Works
// Using await import() defers loading until runtime

// At runtime, both modules will have fully initialized exports

// You avoid accessing uninitialized bindings

import { logB } from "./a.js";
import { logA } from "./b.js";

await logB();
await logA();
