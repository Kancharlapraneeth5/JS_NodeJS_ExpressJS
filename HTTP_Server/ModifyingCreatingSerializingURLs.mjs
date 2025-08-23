const url = new URL("https://example.com/search?term=node");

// Modify search params
url.searchParams.set("term", "javascript"); // update
url.searchParams.append("limit", "25"); // add new
url.searchParams.delete("sort");

console.log("Modified URL:", url.toString()); // https://example.com/search?term=javascript&limit=25

function buildURL(base, params) {
  const newURL = new URL(base);
  Object.entries(params).forEach(([key, value]) => {
    newURL.searchParams.set(key, value);
  });
  return newURL;
}
const apiURL = buildURL("https://api.example.com/data", {
  page: 2,
  filter: "active",
});
console.log("Dynamically Built URL:", apiURL.toString()); // https://api.example.com/data?page=2&filter=active

function getQueryObject(urlString) {
  const url = new URL(urlString);
  const queryObject = {};
  url.searchParams.forEach((value, key) => {
    queryObject[key] = value;
  });
  return queryObject;
}
console.log(
  "Query Object:",
  getQueryObject("https://example.com/products?category=books&sort=asc")
);
