import React from "react";
import { commerceItems } from "../assets/assets";
import { FaPlus, FaHeart } from "react-icons/fa"; // Importing icons for add and like

const Electronics = () => {
  // Filter items where the category is 'electronics'
  const electronicsItems = commerceItems.filter(
    (item) => item.category === "Electronics"
  );

  return (
    <div className="p-5 text-center">
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
        {electronicsItems.map((item, index) => (
          <div
            key={index}
            className="relative -mt-35 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-y-95 py-2"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-auto transform transition-transform duration-300 hover:scale-110"
              />
              <div className="absolute top-3 right-3 flex flex-col gap-3 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <FaPlus className="text-white bg-black bg-opacity-60 p-2 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110" />
                <FaHeart className="text-white bg-black bg-opacity-60 p-2 rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <h3 className="text-orange-500 text-lg">KSh. {item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;
