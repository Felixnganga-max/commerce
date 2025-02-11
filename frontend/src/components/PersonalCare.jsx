import React from "react";
import { commerceItems } from "../assets/assets";
import { FaPlus, FaHeart } from "react-icons/fa";

const PersonalCare = () => {
  // Filter items where the category is 'Personal Care'
  const personalCareItems = commerceItems.filter(
    (item) => item.category === "Personal Care"
  );

  return (
    <div className="p-5 text-center">
      <div className="flex justify-between items-center mb-16">
        <h1 className="text-3xl font-bold text-gray-800">
          Luxury Self-Care Essentials
        </h1>
        <a href="#" className="text-blue-500 hover:underline">
          See More
        </a>
      </div>
      <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
        {personalCareItems.map((item, index) => (
          <div
            key={index}
            className="relative -mt-10 bg-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-y-95 py-2"
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

export default PersonalCare;
