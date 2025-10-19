import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import products from "./data/products.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/shopmart";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const importData = async () => {
  try {
    await Product.deleteMany(); // clears old data
    await Product.insertMany(products); // insert fresh data
    console.log("✅ Products Imported!");
    process.exit();
  } catch (error) {
    console.error("❌ Error importing products:", error);
    process.exit(1);
  }
};

importData();
