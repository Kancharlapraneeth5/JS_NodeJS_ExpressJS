import http from "http";

const PORT = 4100;

http
  .createServer((_req, res) => {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found\n");
  })
  .listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
