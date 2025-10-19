import React, { useContext } from "react";
import "./Favorites.css";
import { FavoritesContext } from "../FavoritesContext";
import { CartContext } from "../CartContext";

function Favorites() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="favorites-container">
      <h2 className="favorites-title">❤️ My Favorites</h2>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076505.png"
            alt="Empty Favorites"
          />
          <p>No favorites yet. Start adding some!</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((item, index) => (
            <div key={index} className="favorite-item">
              <img
                src={item.image}
                alt={item.name}
                className="favorite-img"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/200x200.png?text=No+Image";
                }}
              />
              <h3 className="fav-name">{item.name}</h3>
              <p className="fav-price">₹{item.price}</p>

              <div className="fav-buttons">
                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(item)}
                >
                  🛒 Add to Cart
                </button>
                <button
                  className="remove-fav-btn"
                  onClick={() => removeFromFavorites(item._id)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
