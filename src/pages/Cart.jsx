import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + Number(item.price),
    0
  );

  return (
    <div className="cart-container">

      <h1 className="cart-title">🛒 My Shopping Cart</h1>

      {cart.length === 0 ? (

        <div className="empty-cart">

          <h2>Your Cart is Empty</h2>

          <p>Add some amazing products!</p>

          <Link to="/products">
            <button className="continue-btn">
              Continue Shopping
            </button>
          </Link>

        </div>

      ) : (

        <>
          <div className="cart-list">

            {cart.map((item, index) => (

              <div className="cart-item" key={index}>

                <div className="cart-image">
                  📦
                </div>

                <div className="cart-details">

                  <h2>{item.name}</h2>

                  <p>
                    <strong>Price:</strong> ₹{item.price}
                  </p>

                  <p>
                    <strong>Vendor:</strong> {item.vendor}
                  </p>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          <div className="cart-summary">

            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Total Products</span>
              <span>{cart.length}</span>
            </div>

            <div className="summary-row total-row">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>

            <Link to="/checkout">
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </Link>

          </div>

        </>

      )}

    </div>
  );
}

export default Cart;