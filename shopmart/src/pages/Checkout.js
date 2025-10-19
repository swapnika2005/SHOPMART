import React, { useState } from "react";
import "./Checkout.css";

function Checkout() {
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!customer.name || !customer.email || !customer.phone || !customer.pincode) {
      alert("Please fill in all customer details!");
      return;
    }

    if (paymentMethod === "") {
      alert("Please select a payment method!");
      return;
    }

    if (paymentMethod === "upi" && upiId.trim() === "") {
      alert("Please enter your UPI ID!");
      return;
    }

    if (
      paymentMethod === "card" &&
      (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvv)
    ) {
      alert("Please fill in all card details!");
      return;
    }

    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <h2>✅ Order Placed Successfully!</h2>
        <p>Thank you, {customer.name}! Your order has been placed and will be delivered soon.</p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>🛍 Checkout</h2>

      <form className="checkout-form" onSubmit={handlePaymentSubmit}>
        <div className="section">
          <h3>👤 Customer Details</h3>

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={customer.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={customer.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={customer.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={customer.street}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="area"
              placeholder="Area / Locality"
              value={customer.area}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={customer.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              name="state"
              placeholder="State"
              value={customer.state}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="pincode"
              placeholder="Pincode"
              value={customer.pincode}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="section">
          <h3>💳 Payment Method</h3>

          <div className="payment-options">
            <label>
              <input
                type="radio"
                name="payment"
                value="upi"
                checked={paymentMethod === "upi"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              UPI
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Credit / Debit Card
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Cash on Delivery (COD)
            </label>
          </div>

          {paymentMethod === "upi" && (
            <div className="upi-section">
              <input
                type="text"
                placeholder="Enter your UPI ID (e.g., name@upi)"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
              />
            </div>
          )}

          {paymentMethod === "card" && (
            <div className="card-section">
              <input
                type="text"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cardNumber: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, expiry: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) =>
                  setCardDetails({ ...cardDetails, cvv: e.target.value })
                }
              />
            </div>
          )}
        </div>

        <button type="submit" className="place-order-btn">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
