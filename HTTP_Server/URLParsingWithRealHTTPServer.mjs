import http from "http";

const PORT = 4300;

// The below mini HTTP server demonstrates URL parsing with real time http requests.
http
  .createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const pathname = url.pathname;
    const searchParams = url.searchParams;
    console.log("Pathname:", pathname);
    // The below line is to get the total search params as a string (query params string).
    console.log("Search Params Object:", url.search);
    console.log("Search Parameters:", Object.fromEntries(searchParams));

    if (pathname == "/hello") {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World\n");
    } else if (pathname === "/goodbye") {
      const nameInURL = url.searchParams.get("name") || "Praneeth";
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Goodbye " + nameInURL + "\n");
    } else {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("Not Found\n");
    }
  })
  .listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
