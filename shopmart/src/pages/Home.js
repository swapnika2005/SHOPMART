import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import SponsorSection from "../components/SponsorSection";
import Footer from "../components/Footer";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const navigate = useNavigate();

  // 🔹 Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  // 🔹 Categories
  const categories = [
    {
      name: "Electronics",
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Clothing",
      image: "https://images.pexels.com/photos/5531746/pexels-photo-5531746.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Furniture",
      image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Books",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Cosmetics",
      image: "https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="home-container">
      {/* 🔹 Hero Section (Slider) */}
      <Slider {...settings} className="banner">
        {categories.map((cat) => (
          <div key={cat.name} className="banner-item">
            <img src={cat.image} alt={cat.name} />
            <div className="banner-text">
              <h2>{cat.name}</h2>
              <p>
                {cat.name === "Electronics" && "Latest gadgets at unbeatable prices!"}
                {cat.name === "Clothing" && "Upgrade your wardrobe with new styles."}
                {cat.name === "Furniture" && "Make your home beautiful and comfortable."}
                {cat.name === "Books" && "Explore new worlds in every page."}
                {cat.name === "Cosmetics" && "Enhance your natural beauty with top brands."}
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* 🔹 Sponsors Section */}
      <SponsorSection />

      {/* 🔹 Categories Section */}
      <h2 className="category-heading">Shop by Category</h2>
      <div className="categories">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="category-card"
            onClick={() => navigate(`/products?category=${cat.name}`)}
          >
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </div>
        ))}
      </div>

      {/* 🔹 Footer Section */}
      <Footer />
    </div>
  );
}

export default Home;
