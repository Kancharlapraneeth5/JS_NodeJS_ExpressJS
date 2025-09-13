import http from "http";

const PORT = 3500;

http
  .createServer((req, res) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString(); // Convert Buffer to string
    });

    req.on("end", () => {
      console.log("Received Body:", body);
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("Hello World\n");
    });
  })
  .listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
