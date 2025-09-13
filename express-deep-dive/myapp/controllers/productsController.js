module.exports.getProducts = (_req, res) => {
  res.json([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ]);
};

module.exports.getProductById = (req, res) => {
  const id = req.params.id;
  res.json({ id, name: "Sample Product" });
};
