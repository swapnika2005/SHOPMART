// src/FavoritesContext.js
import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // ✅ Add item to favorites (no duplicates)
  const addToFavorites = (product) => {
    setFavorites((prevFavs) => {
      const exists = prevFavs.find((item) => item._id === product._id);
      if (exists) return prevFavs;
      return [...prevFavs, product];
    });
  };

  // ✅ Remove from favorites
  const removeFromFavorites = (id) => {
    setFavorites((prevFavs) => prevFavs.filter((item) => item._id !== id));
  };

  // ✅ Clear all favorites
  const clearFavorites = () => setFavorites([]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
