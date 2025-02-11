import React from "react";
import { commerceItems } from "../assets/assets";
import { FaPlus, FaHeart } from "react-icons/fa";
// Importing icons for add and like

const Clothes = () => {
  // Filter items where the category is 'Clothes'
  const clothesItems = commerceItems.filter(
    (item) => item.category === "Clothes"
  );

  return (
    <div className="p-5 text-center">
      {/* Fancy advertisement name and See More option at the top */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-600 mb-16">
          Trendy Threads Collection
        </h1>
        <button className="text-blue-500 hover:underline">See More</button>
      </div>

      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-12">
        {clothesItems.map((item, index) => (
          <div
            key={index}
            className="relative -mt-10 overflow-hidden transform transition-all duration-300 py-4 h-[400px] flex flex-col justify-between"
          >
            <div className="relative h-[250px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 flex flex-col gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <FaHeart className="text-white bg-black bg-opacity-60 p-2 rounded-full cursor-pointer" />
              </div>
            </div>
            <div className="p-4 h-[100px] flex flex-col justify-between">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <h3 className="text-orange-500 text-lg">KSh. {item.price}</h3>
            </div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
              <FaPlus className="cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothes;
