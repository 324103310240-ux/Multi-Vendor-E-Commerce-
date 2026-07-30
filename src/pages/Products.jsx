import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      <h1 className="page-title">
        Our Products
      </h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="product-grid">

        {filteredProducts.map((product) => (

          <div className="product-card" key={product._id}>

            <div className="product-image">
              📦
            </div>

            <h2>{product.name}</h2>

            <p className="price">
              ₹ {product.price}
            </p>

            <p className="vendor">
              Vendor : {product.vendor || "Admin"}
            </p>

            <div className="button-group">

              <button
                className="cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              <Link to={`/product/${product._id}`}>
                <button className="details-btn">
                  View Details
                </button>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;