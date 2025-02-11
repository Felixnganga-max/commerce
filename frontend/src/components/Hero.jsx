import React from "react";
import displayImages from "../assets/assets";

const Hero = () => {
  const products = [
    {
      image: displayImages.valentine,
      title: "Valentine's Cards",
      description: "Show them how much you care",
      bg: "bg-orange-100",
    },
    {
      image: displayImages.lg,
      title: "LG Smart TV",
      description: "Find the perfect gift for everyone",
      bg: "bg-pink-200",
      colSpan: "lg:col-span-2", // Spans 2 columns only on large screens
    },
    {
      image: displayImages.sneakers,
      title: "Sneakers",
      description: "Step into style",
      bg: "bg-yellow-200",
    },
    {
      image: displayImages.forher,
      title: "Gifts for Her",
      description: "Delight her with something special",
      bg: "bg-red-100",
    },
    {
      image: displayImages.beddingset,
      title: "Bedding Sets",
      description: "Cozy up this season",
      bg: "bg-blue-100",
    },
    {
      image: displayImages.beauty,
      title: "Beauty Essentials",
      description: "Up to 55% off select items",
      bg: "bg-green-100",
    },
    {
      image: displayImages.kids,
      title: "Kids' Plush Toys",
      description: "Cuddle-worthy trends",
      bg: "bg-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product, index) => (
        <div
          key={index}
          className={`relative rounded-2xl shadow-lg overflow-hidden ${
            product.bg
          } hover:shadow-xl transform hover:scale-105 transition-all duration-300 ${
            product.colSpan || ""
          }`}
        >
          {/* Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover"
          />

          {/* Text Overlay */}
          <div className="p-4 flex flex-col items-start space-y-2">
            <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
            <button className="mt-2 px-4 py-2 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700">
              Shop Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
