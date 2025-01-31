import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import displayImages from "../assets/assets";

const HeroSection = () => {
  const heroContent = [
    {
      title: "Shop the Latest Trends",
      text: "Discover the best deals and newest arrivals in fashion, all in one place.",
      backimage: displayImages.shoe,
      image: displayImages.hoodie,
    },
    {
      title: "Exclusive Offers Just for You",
      text: "Unlock special discounts and promotions tailored to your shopping needs.",
      backimage: displayImages.iphones,
      image: displayImages.fridge,
    },
    {
      title: "Quality Products at Affordable Prices",
      text: "Browse our selection of top-rated products from trusted brands at unbeatable prices.",
      backimage: displayImages.supermarket,
      image: displayImages.screenlight,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle navigation
  const handleNavClick = (direction) => {
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % heroContent.length
        : (prevIndex - 1 + heroContent.length) % heroContent.length
    );
  };

  return (
    <section className="relative w-full h-[90vh] md:h-[75vh] flex items-center justify-center">
      {/* Background Image & Overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroContent[currentIndex].backimage})`, // Corrected
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(128, 0, 128, 0.9)" }} // Purple with 60% opacity
        ></div>
      </div>

      {/* Content */}
      <div
        className={`relative z-10 container -mt-40 mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row ${
          currentIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
        } items-center justify-between text-white text-center md:text-left`}
      >
        {/* Left Section - Text */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {heroContent[currentIndex].title}
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            {heroContent[currentIndex].text}
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-purple-700 font-semibold text-lg rounded-full shadow-lg hover:bg-purple-600 hover:text-white transition duration-300">
            Shop Now
          </button>
        </div>

        {/* Right Section - Product Image */}
        <div className="max-w-md mt-10 md:w-1/2 flex justify-center">
          <img
            src={heroContent[currentIndex].image} // Corrected
            alt="Product"
            className="w-full max-h-[280px] object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl z-20"
        onClick={() => handleNavClick("prev")}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl z-20"
        onClick={() => handleNavClick("next")}
      >
        <FaArrowRight />
      </button>
    </section>
  );
};

export default HeroSection;
