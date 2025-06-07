// The below code gives us an error because require () only import synchronous modules
// but .mjs files or ES modules are asynchronous.

// const mjsModueImport = require("../esm/mjsModule.mjs");

// mjsModueImport();

// With the below code we can import .mjs files in CommonJS modules
(async () => {
  const mjsModule = await import("../esm/mjsModule.js");
  // You're doing a dynamic import of an ES Module inside a CommonJS file.
  // This returns a module namespace object, like the below:
  //  {
  //     default: { greet: [Function: greet] } // or default: [Function] if default is a function
  //  }
  // so to access the default export, you need to use `mjsModule.default`.

  // in ESM, the default binding is automatically unwrapped when using import defaultName from.
  // But with dynamic import() (in CommonJS), you're getting the whole module namespace object, so default is a property on it.

  mjsModule.default.greet(); // Call the default export function
})();
