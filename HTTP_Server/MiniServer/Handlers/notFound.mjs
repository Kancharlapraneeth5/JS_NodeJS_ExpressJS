const notFound = (_req, res) => {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found");
};

export default notFound;
