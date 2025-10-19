import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { useNavigate } from "react-router-dom";  // ✅ Import navigation
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate(); // ✅ Create navigate instance

  // ✅ Calculate total price
  const total = cart.reduce((sum, i) => sum + i.price, 0).toFixed(2);

  // ✅ Handle checkout click
  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
          />
          <p>Your cart is empty. Start shopping now!</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>
            <div className="cart-buttons">
              <button className="clear-btn" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
