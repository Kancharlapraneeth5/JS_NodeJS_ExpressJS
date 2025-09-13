const home = (_req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Welcome to the Home Page</h1>");
};

export default home;
