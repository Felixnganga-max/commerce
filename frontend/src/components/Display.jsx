import React, { useState } from "react";
import displayImages from "../assets/assets";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const images = [
  displayImages.furniture, // Replace with actual image imports/paths
  displayImages.beauty,
];

const Display = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full z-10"
        onClick={prevImage}
      >
        <FaChevronLeft />
      </button>
      <div className="overflow-hidden">
        <img
          src={images[currentIndex]}
          alt={`carousel image ${currentIndex + 1}`}
          className="h-auto transition-transform duration-500 ease-in-out rounded-md"
        />
      </div>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full z-10"
        onClick={nextImage}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Display;
