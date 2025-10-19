// backend/models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g. "clothing", "cosmetic"
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
