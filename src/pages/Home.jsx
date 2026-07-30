import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">

      <div className="hero">

        <div className="hero-left">
          <h1>Welcome to MultiVendor Marketplace</h1>

          <p>
            Discover amazing products from multiple vendors at the best prices.
            Shop with confidence and enjoy a seamless online shopping experience.
          </p>

          <div className="hero-buttons">
            <Link to="/products">
              <button className="shop-btn">Shop Now</button>
            </Link>

            <Link to="/register">
              <button className="register-btn">Become a Vendor</button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="shopping-icon">🛍️</div>
        </div>

      </div>

    </div>
  );
}

export default Home;