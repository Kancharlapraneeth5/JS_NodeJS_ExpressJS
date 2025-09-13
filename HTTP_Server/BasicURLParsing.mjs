// importing URL module, only required in CommonJS and in Node.js versions < 10
// In ES modules and in Node.js versions >= 10, URL is globally available

const url = new URL("https://example.com/search?term=node&limit=10&sort=asc");

// Basic components
console.log("Full URL:", url.href); // https://example.com/search?term=node&limit=10&sort=asc
console.log("Pathname:", url.pathname); // /search
console.log("Search:", url.search); // ?term=node&limit=10&sort=asc

// Accessing individual query params
console.log("Term:", url.searchParams.get("term")); // node
console.log("Limit:", url.searchParams.get("limit")); // 10
console.log("Page:", url.searchParams.get("page") || "default"); // default (fallback)

// Loop through all query params
console.log("\nAll Search Params:");
url.searchParams.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// Multiple values for same key
const multiValueURL = new URL("https://example.com/items?id=1&id=2&id=3");
console.log("\nAll IDs:", multiValueURL.searchParams.getAll("id")); // ['1', '2', '3']
