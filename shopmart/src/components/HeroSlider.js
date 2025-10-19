import React, { useState, useEffect } from "react";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
      title: "Electronics Sale",
      subtitle: "Latest gadgets at unbeatable prices!",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?w=1600",
      title: "Trendy Fashion",
      subtitle: "Upgrade your wardrobe with new styles.",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1616628188550-8c58e9f32752?w=1600",
      title: "Stylish Furniture",
      subtitle: "Make your home beautiful and comfortable.",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1600",
      title: "Books & Knowledge",
      subtitle: "Explore new worlds in every page.",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa1?w=1600",
      title: "Cosmetics & Beauty",
      subtitle: "Enhance your natural beauty with top brands.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
            <p className="text-lg">{slide.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
