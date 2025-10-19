// backend/models/Product.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  image: String,
  description: String,
});

const Product = mongoose.model("Product", productSchema);
export default Product;
