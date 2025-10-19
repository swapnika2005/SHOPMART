// src/components/Navbar.js
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../CartContext";
import { FavoritesContext } from "../FavoritesContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { favorites } = useContext(FavoritesContext);
  const location = useLocation();

  return (
    <nav
      style={{
        background: "#2874f0",
        padding: "12px 24px",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {/* ✅ Brand */}
      <Link
        to="/"
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: "1.6rem",
          textDecoration: "none",
        }}
      >
        ShopMart
      </Link>

      {/* ✅ Navigation Links */}
      <div>
        <Link
          to="/"
          style={{
            color: location.pathname === "/" ? "#ffe600" : "white",
            marginRight: "18px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Home
        </Link>

        <Link
          to="/products"
          style={{
            color: location.pathname.startsWith("/products")
              ? "#ffe600"
              : "white",
            marginRight: "18px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Products
        </Link>

        <Link
          to="/favorites"
          style={{
            color:
              location.pathname === "/favorites" ? "#ffe600" : "white",
            marginRight: "18px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          ❤️ Favorites ({favorites.length})
        </Link>

        <Link
          to="/cart"
          style={{
            color: location.pathname === "/cart" ? "#ffe600" : "white",
            background: "#0056b3",
            padding: "8px 14px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          🛒 Cart ({cart.length})
        </Link>

        <Link
          to="/login"
          style={{
            color:
              location.pathname === "/login" ? "#ffe600" : "white",
            marginLeft: "18px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Login
        </Link>

        <Link
          to="/register"
          style={{
            color:
              location.pathname === "/register" ? "#ffe600" : "white",
            marginLeft: "18px",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
