import http from "http";

const PORT = 3500;

const server = http.createServer((req, res) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Headers:`, req.headers);

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
