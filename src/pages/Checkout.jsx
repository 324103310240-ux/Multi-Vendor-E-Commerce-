import { useContext, useState } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout() {
  const { cart } = useContext(CartContext);

  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const totalAmount = cart.reduce(
    (total, item) => total + Number(item.price),
    0
  );

  const placeOrder = async () => {
    if (!customerName || !phoneNumber || !address) {
      alert("Please fill all the details.");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/orders/place", {
        customerName,
        phoneNumber,
        address,
        products: cart.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: 1,
        })),
        totalAmount,
      });

      alert("🎉 Order Placed Successfully!");

      setCustomerName("");
      setPhoneNumber("");
      setAddress("");

    } catch (error) {
      console.log(error);
      alert("Failed to Place Order");
    }
  };

  return (
    <div className="checkout-container">

      <div className="checkout-card">

        <h2>Checkout</h2>
        <p className="checkout-subtitle">
          Complete your order details
        </p>

        <label>Customer Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <label>Delivery Address</label>
        <textarea
          rows="4"
          placeholder="Enter your delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="order-summary">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Total Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Payment Method</span>
            <span>Cash on Delivery</span>
          </div>

          <div className="summary-row total">
            <span>Total Amount</span>
            <span>₹{totalAmount}</span>
          </div>

        </div>

        <button
          className="place-order-btn"
          onClick={placeOrder}
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;