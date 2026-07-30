import { useState } from "react";
import axios from "axios";
import "../styles/AddProduct.css";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    vendor: "",
    description: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/products/add",
        product
      );

      alert(res.data.message || "Product Added Successfully!");

      setProduct({
        name: "",
        price: "",
        vendor: "",
        description: "",
      });

    } catch (err) {
      alert("Failed to Add Product");
      console.log(err);
    }
  };

  return (
    <div className="add-product-container">

      <div className="add-product-card">

        <h2>Add New Product</h2>
        <p>Fill in the product details below.</p>

        <form onSubmit={addProduct}>

          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={product.name}
            onChange={handleChange}
            required
          />

          <label>Price</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={product.price}
            onChange={handleChange}
            required
          />

          <label>Vendor Name</label>
          <input
            type="text"
            name="vendor"
            placeholder="Enter vendor name"
            value={product.vendor}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            rows="4"
            name="description"
            placeholder="Enter product description"
            value={product.description}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Add Product
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddProduct;