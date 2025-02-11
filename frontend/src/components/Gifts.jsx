import React from "react";
import { commerceItems } from "../assets/assets";
import { FaHeart } from "react-icons/fa";

const Gifts = () => {
  const giftItems = commerceItems.filter((item) => item.category === "Gifts");

  return (
    <div className="p-5 text-center">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-red-500">
          Perfect Gift Selection
        </h1>
        <button className="text-blue-500 hover:underline">See More</button>
      </div>
      <div className="p-5 text-center w-full md:w-[90%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6">
          {giftItems.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative h-[300px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaHeart className="text-red-500 bg-opacity-60 p-2 rounded-full cursor-pointer hover:bg-opacity-80 text-5xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <h3 className="text-red-500 text-lg">KSh. 100</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {giftItems.slice(2).map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative h-[300px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaHeart className="text-red-500 bg-opacity-60 p-2 rounded-full cursor-pointer hover:bg-opacity-80 text-5xl" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <h3 className="text-red-500 text-lg">KSh. 100</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gifts;
