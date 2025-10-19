// src/components/AuthModal.js
import React, { useState } from "react";
import "./AuthModal.css";

export default function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>✖</button>
        
        <h2>{isLogin ? "Login" : "Register"}</h2>
        
        <form>
          {!isLogin && <input type="text" placeholder="Full Name" required />}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && <input type="password" placeholder="Confirm Password" required />}
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>

        <p>
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Create an account" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
