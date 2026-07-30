const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add Product
router.post("/add", async (req, res) => {
  try {
    const { name, description, price, image, category, stock, vendor } = req.body;

    const product = new Product({
      name,
      description,
      price,
      image,
      category,
      stock,
      vendor,
    });

    await product.save();

    res.status(201).json({
      message: "Product Added Successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Get All Products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});
// Delete Product
router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.json({
      message: "Product Deleted Successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});
// Update Product
router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      message: "Product Updated Successfully",
      product: updatedProduct
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.get("/test", (req, res) => {
  res.send("Product Routes Working");
});

module.exports = router;