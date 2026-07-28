const express = require("express");
const router = express.Router();

const { addProduct } = require("../controllers/productController");

// Add Product Route
router.post("/", addProduct);

module.exports = router;