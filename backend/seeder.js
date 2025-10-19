import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const products = [
  // 🖥 ELECTRONICS
  {
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 2499,
    image: "https://images.pexels.com/photos/3394663/pexels-photo-3394663.jpeg",
    description: "High-quality sound with noise cancellation and deep bass.",
  },
  {
    name: "Smartphone 5G",
    category: "Electronics",
    price: 19999,
    image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
    description: "Latest 5G smartphone with AMOLED display and 128GB storage.",
  },
  {
    name: "Laptop 15.6 inch",
    category: "Electronics",
    price: 54999,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    description: "Powerful laptop for work, gaming, and entertainment.",
  },
  {
    name: "Smart Watch",
    category: "Electronics",
    price: 2999,
    image: "https://images.pexels.com/photos/3783416/pexels-photo-3783416.jpeg",
    description: "Track fitness, heart rate, and calls easily.",
  },
  {
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1599,
    image: "https://images.pexels.com/photos/9767551/pexels-photo-9767551.jpeg",
    description: "Portable speaker with deep bass and 12-hour battery.",
  },
  {
    name: "Power Bank 10000mAh",
    category: "Electronics",
    price: 899,
    image: "https://images.pexels.com/photos/3921704/pexels-photo-3921704.jpeg",
    description: "Fast-charging power bank with dual USB output.",
  },
  {
    name: "Wireless Keyboard",
    category: "Electronics",
    price: 1299,
    image: "https://images.pexels.com/photos/28396251/pexels-photo-28396251.jpeg",
    description: "Ergonomic keyboard with long battery life.",
  },
  {
    name: "Mouse",
    category: "Electronics",
    price: 499,
    image: "https://images.pexels.com/photos/7371999/pexels-photo-7371999.jpeg",
    description: "Smooth, responsive wireless mouse.",
  },
  {
    name: "DSLR Camera",
    category: "Electronics",
    price: 45999,
    image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
    description: "Capture your moments with 24MP precision and 4K video.",
  },
  {
    name: "Tablet 10 inch",
    category: "Electronics",
    price: 15999,
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg",
    description: "Portable tablet with stunning display and 8-hour battery.",
  },

  // 👕 CLOTHING
  {
    name: "Men’s Cotton T-Shirt",
    category: "Clothing",
    price: 599,
    image: "https://images.pexels.com/photos/15952332/pexels-photo-15952332.jpeg",
    description: "Soft cotton T-shirt with comfortable fit.",
  },
  {
    name: "Women’s Denim Jacket",
    category: "Clothing",
    price: 1799,
    image: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg",
    description: "Trendy denim jacket for a casual look.",
  },
  {
    name: "Men’s Formal Shirt",
    category: "Clothing",
    price: 999,
    image: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg",
    description: "Perfect formal shirt for meetings and events.",
  },
  {
    name: "Women’s Summer Dress",
    category: "Clothing",
    price: 1499,
    image: "https://images.pexels.com/photos/8908766/pexels-photo-8908766.jpeg",
    description: "Beautiful floral dress for summer vibes.",
  },
  {
    name: "Men’s Hoodie",
    category: "Clothing",
    price: 1299,
    image: "https://media.istockphoto.com/id/154960461/photo/red-sweat-shirt-on-white-background.jpg?s=1024x1024&w=is&k=20&c=MRRFOn8cALOKUscHEKaKUWJ11Ey48ol7QaEJeTJVTm4=",
    description: "Soft hoodie with front pocket and cozy feel.",
  },
  {
    name: "Women’s Saree",
    category: "Clothing",
    price: 2499,
    image: "https://images.pexels.com/photos/34155069/pexels-photo-34155069.jpeg",
    description: "Elegant silk saree perfect for festivals.",
  },
  {
    name: "Men’s Jeans",
    category: "Clothing",
    price: 1799,
    image: "https://images.pexels.com/photos/34109105/pexels-photo-34109105.jpeg",
    description: "Durable and stretchable denim jeans.",
  },
  {
    name: "Women’s Blazer",
    category: "Clothing",
    price: 2599,
    image: "https://images.pexels.com/photos/7693223/pexels-photo-7693223.jpeg",
    description: "Formal blazer with modern design.",
  },
  {
    name: "Men’s Track Pants",
    category: "Clothing",
    price: 799,
    image: "https://images.pexels.com/photos/11527708/pexels-photo-11527708.jpeg",
    description: "Perfect for workouts and casual wear.",
  },
  {
    name: "Women’s Top",
    category: "Clothing",
    price: 499,
    image: "https://images.pexels.com/photos/19330216/pexels-photo-19330216.jpeg",
    description: "Trendy and lightweight top for daily wear.",
  },

  // 🛋 FURNITURE
  {
    name: "Sofa Set",
    category: "Furniture",
    price: 25999,
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    description: "3-seater sofa with premium fabric finish.",
  },
  {
    name: "Office Chair",
    category: "Furniture",
    price: 4999,
    image: "https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg",
    description: "Ergonomic chair for comfort during work.",
  },
  {
    name: "Wooden Dining Table",
    category: "Furniture",
    price: 18999,
    image: "https://images.pexels.com/photos/271805/pexels-photo-271805.jpeg",
    description: "6-seater wooden dining set with smooth finish.",
  },
  {
    name: "Bed Frame",
    category: "Furniture",
    price: 20999,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    description: "Sturdy queen-size bed frame with headboard.",
  },
  {
    name: "Bookshelf",
    category: "Furniture",
    price: 5999,
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    description: "Spacious bookshelf for your home office.",
  },
  {
    name: "Coffee Table",
    category: "Furniture",
    price: 2999,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
    description: "Modern design wooden coffee table.",
  },
  {
    name: "TV Unit",
    category: "Furniture",
    price: 7999,
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg",
    description: "Stylish TV unit with storage space.",
  },
  {
    name: "Wardrobe",
    category: "Furniture",
    price: 15999,
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    description: "Spacious wardrobe with sliding doors.",
  },
  {
    name: "Study Table",
    category: "Furniture",
    price: 4999,
    image: "https://images.pexels.com/photos/813691/pexels-photo-813691.jpeg",
    description: "Compact study table with drawer storage.",
  },
  {
    name: "Recliner Chair",
    category: "Furniture",
    price: 8999,
    image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
    description: "Comfortable recliner chair with adjustable backrest.",
  },

  // 📚 BOOKS
  {
    name: "The Alchemist",
    category: "Books",
    price: 399,
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
    description: "An inspiring story about dreams and destiny.",
  },
  {
    name: "Atomic Habits",
    category: "Books",
    price: 499,
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
    description: "A proven framework for building good habits.",
  },
  {
    name: "Harry Potter Collection",
    category: "Books",
    price: 2999,
    image: "https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg",
    description: "Complete Harry Potter series box set.",
  },
  {
    name: "Rich Dad Poor Dad",
    category: "Books",
    price: 299,
    image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    description: "Financial wisdom for everyone.",
  },
  {
    name: "Wings of Fire",
    category: "Books",
    price: 349,
    image: "https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg",
    description: "Autobiography of Dr. A.P.J. Abdul Kalam.",
  },

  // 💄 COSMETICS
  {
    name: "Lipstick Set",
    category: "Cosmetics",
    price: 799,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
    description: "Matte finish lipstick set of 6 shades.",
  },
  {
    name: "Foundation Cream",
    category: "Cosmetics",
    price: 599,
    image: "https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg",
    description: "Smooth blend foundation for natural glow.",
  },
  {
    name: "Eyeliner Pen",
    category: "Cosmetics",
    price: 299,
    image: "https://images.pexels.com/photos/2517447/pexels-photo-2517447.jpeg",
    description: "Waterproof eyeliner with intense black pigment.",
  },
  {
    name: "Makeup Brush Set",
    category: "Cosmetics",
    price: 1299,
    image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg",
    description: "Professional 12-piece brush set.",
  },
  {
    name: "Nail Polish Kit",
    category: "Cosmetics",
    price: 499,
    image: "https://images.pexels.com/photos/12571010/pexels-photo-12571010.jpeg",
    description: "Set of 8 long-lasting nail polishes.",
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Products Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Import Failed:", error);
    process.exit(1);
  }
};

importData();
