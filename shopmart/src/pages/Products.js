import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../CartContext";
import { FavoritesContext } from "../FavoritesContext";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get("category");

  const { cart, addToCart } = useContext(CartContext);
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);

  // ✅ Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = categoryFilter
          ? `http://localhost:5000/api/products/category/${categoryFilter}`
          : `http://localhost:5000/api/products`;
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [categoryFilter]);

  if (loading) return <h2 className="loading">Loading Products...</h2>;

  return (
    <div className="products-page">
      <h1 className="page-title">🛍️ Our Products</h1>

      {categoryFilter && (
        <h2 className="category-title">
          Showing results for: <span>{categoryFilter}</span>
        </h2>
      )}

      <div className="products-grid">
        {products.map((product) => {
          const inCart = cart.some((item) => item._id === product._id);
          const isFav = favorites.some((fav) => fav._id === product._id);

          return (
            <div key={product._id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/200x200.png?text=No+Image";
                }}
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">₹{product.price}</p>

              <div className="button-group">
                <button
                  className={`btn-cart ${inCart ? "added" : ""}`}
                  onClick={() => addToCart(product)}
                  disabled={inCart}
                >
                  {inCart ? "✅ Added to Cart" : "🛒 Add to Cart"}
                </button>

                <button
                  className={`btn-fav ${isFav ? "active" : ""}`}
                  onClick={() =>
                    isFav
                      ? removeFromFavorites(product._id)
                      : addToFavorites(product)
                  }
                >
                  {isFav ? "💔 Remove Favorite" : "❤️ Add to Favorites"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
