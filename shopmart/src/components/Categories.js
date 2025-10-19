import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Clothing",
    img: "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?w=400"
  },
  {
    id: 2,
    name: "Electronics",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400"
  },
  {
    id: 3,
    name: "Books",
    img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400"
  },
  {
    id: 4,
    name: "Furniture",
    img: "https://images.unsplash.com/photo-1616627989159-1d63a93c35e4?w=400"
  },
  {
    id: 5,
    name: "Cosmetics",
    img: "https://images.unsplash.com/photo-1612817159949-195b6a07ef2d?w=400"
  }
];

const Categories = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/products?category=${category.toLowerCase()}`);
  };

  return (
    <section className="py-10 px-6">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleClick(cat.name)}
            className="cursor-pointer rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 bg-white"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-lg">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
