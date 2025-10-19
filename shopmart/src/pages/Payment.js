import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const navigate = useNavigate();
  const location = useLocation();
  const { address } = location.state || {};

  const handlePayment = () => {
    navigate("/order-success", { state: { address } });
  };

  return (
    <div className="payment-page">
      <h2>Payment Method</h2>
      <div className="payment-options">
        <label><input type="radio" name="method" defaultChecked /> UPI</label>
        <label><input type="radio" name="method" /> Credit / Debit Card</label>
        <label><input type="radio" name="method" /> Cash on Delivery</label>
      </div>
      <button className="btn-primary" onClick={handlePayment}>
        Confirm Payment
      </button>
    </div>
  );
}

export default Payment;
