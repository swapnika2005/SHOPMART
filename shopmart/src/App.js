// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import Register from "./pages/Register";

// ✅ Contexts
import { CartProvider } from "./CartContext";
import { FavoritesProvider } from "./FavoritesContext";

// ✅ Components
import Navbar from "./components/Navbar";

import "./App.css"; // 👈 Added for styling

function App() {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <div className="app-wrapper">
            <Navbar />

            <main className="main-content">
              <Routes>
                {/* 🏠 Main Pages */}
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetails />} />

                {/* 🛒 Shopping Flow */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/order-success" element={<OrderSuccess />} />

                {/* ❤️ User Pages */}
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </main>
          </div>
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
