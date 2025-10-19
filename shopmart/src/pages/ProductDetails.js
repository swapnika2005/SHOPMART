import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../CartContext"; // ✅ connect to your cart system

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext); // ✅ get addToCart function from context

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("❌ Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6">
      {/* Back Link */}
      <Link
        to="/products"
        className="text-blue-600 underline hover:text-blue-800"
      >
        ← Back to Products
      </Link>

      <div className="flex flex-col md:flex-row mt-6 gap-6">
        {/* Product Image */}
        <img
          src={
            product.image?.startsWith("http")
              ? product.image
              : `http://localhost:5000/${product.image}`
          }
          alt={product.name}
          className="w-72 h-72 object-cover rounded-lg shadow"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/200?text=No+Image")
          }
        />

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p className="text-base text-gray-700">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mt-4">
            ₹{product.price}
          </p>

          {/* ✅ Add to Cart button */}
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-5 py-2 mt-4 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
