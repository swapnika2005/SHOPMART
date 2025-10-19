import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./OrderSuccess.css";

function OrderSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { address } = location.state || {};

  return (
    <div className="order-success-page">
      <h2>🎉 Order Placed Successfully!</h2>
      <p>We’ll deliver your items to:</p>
      <p><strong>{address}</strong></p>
      <button className="btn-primary" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default OrderSuccess;
