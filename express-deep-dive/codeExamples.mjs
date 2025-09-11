import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => res.send("Hello World"));
app.get("/about", (_req, res) => res.send("About Us Page"));
app.get("/products", (_req, res) => res.send("All Products"));
app.get("/products/:id", (req, res) =>
  res.send(`Product ID: ${req.params.id}`)
);
// The below route is used to handle the query params
app.get("/search", (req, res) => {
  const { term, brand } = req.query;
  res.send(`Search results for ${term} of brand ${brand}`);
});
app.post("/api/users", (req, res) =>
  res.json({ message: "User created", data: req.body })
);

// Should be placed after all routes, if no route matched then the below line will be executed
app.use((_req, res) => res.status(404).send("404 - Page Not Found"));

app.listen(7000, () => console.log("Server running at http://localhost:7000"));
