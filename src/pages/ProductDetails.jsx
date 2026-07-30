import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "../styles/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        const foundProduct = res.data.find((p) => p._id === id);
        setProduct(foundProduct);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h2>;
  }

  return (
    <div className="details-container">

      <div className="details-card">

        <div className="details-image">
          📦
        </div>

        <div className="details-content">

          <h1>{product.name}</h1>

          <h2 className="price">₹ {product.price}</h2>

          <p>
            <strong>Vendor:</strong> {product.vendor || "Admin"}
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p className="description">
            {product.description ||
              "No description available for this product."}
          </p>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;