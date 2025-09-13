const fs = require("fs");
const products = JSON.parse(fs.readFileSync("./data/products.json", "utf-8"));

module.exports.getAllProducts = (req, res) => {
  res.json(products);
};

module.exports.getProductById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    const err = new Error("Product not found");
    err.status = 404;
    return next(err);
  }
  res.json(product);
};

module.exports.createProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (!name || !price) {
    const err = new Error("Name and Price are required");
    err.status = 400;
    return next(err);
  }
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  fs.writeFileSync("./data/products.json", JSON.stringify(products, null, 2));
  res.status(201).json(newProduct);
};

module.exports.updateProduct = (req, res, next) => {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    const err = new Error("Product not found");
    err.status = 404;
    return next(err);
  }

  //   ✅ What is Object.assign()?
  // Object.assign(target, ...sources)
  // Purpose: Copies properties from one or more source objects into a target object.
  // Returns: The modified target object.
  // It’s a shallow copy, not deep.

  // EXAMPLE TO UNDERSTAND.

  //   const target = { name: "Laptop", price: 1000 };
  // const updates = { price: 1200, category: "Electronics" };

  // Object.assign(target, updates);

  // console.log(target);
  // Output: { name: "Laptop", price: 1200, category: "Electronics" }

  // The shallow copy means that nested objects are not cloned.
  // Example:
  // const target = { name: "Laptop", specs: { ram: "16GB", storage: "512GB" } };
  // const updates = { specs: { storage: "1TB" } };
  // Object.assign(target, updates);
  // console.log(target);
  // Output: { name: "Laptop", specs: { storage: "1TB" } }

  // The deep copy means that nested objects are cloned.
  // Example:
  // const target = { name: "Laptop", specs: { ram: "16GB", storage: "512GB" } };
  // const updates = { specs: { storage: "1TB" } };
  // Object.assign(target, updates);
  // console.log(target);
  // Output: { name: "Laptop", specs: { ram: "16GB", storage: "1TB" } }

  // Here to update the product we are using shallow copy as we don't have any nested objects to update.
  Object.assign(product, req.body);
  fs.writeFileSync("./data/products.json", JSON.stringify(products, null, 2));
  res.json(product);
};

module.exports.deleteProduct = (req, res, next) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    const err = new Error("Product not found");
    err.status = 404;
    return next(err);
  }
  const deleted = products.splice(index, 1)[0];
  fs.writeFileSync("./data/products.json", JSON.stringify(products, null, 2));
  res.json(deleted);
};
