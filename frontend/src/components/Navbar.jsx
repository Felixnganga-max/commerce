import React, { useState } from "react";
import { FaSearch, FaBars, FaShoppingCart, FaUserAlt } from "react-icons/fa"; // Added React Icons for mobile menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To toggle the mobile menu

  return (
    <nav className="bg-purple-700 p-4 flex items-center justify-between h-24">
      {/* Logo and text */}
      <div className="flex items-center gap-2">
        <div className="bg-yellow-500 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v18m9-9H3"
            />
          </svg>
        </div>
        <div className="text-white">
          <p className="font-bold text-sm">How do you want your items?</p>
          <p className="text-xs">Sacramento, 95829 • Sacramento Supercenter</p>
        </div>
      </div>

      {/* Hamburger Icon for mobile */}
      <div
        className="lg:hidden text-white cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FaBars size={24} />
      </div>

      {/* Search bar on larger screens */}
      <div
        className={`relative w-1/2 lg:block ${isMenuOpen ? "block" : "hidden"}`}
      >
        <input
          type="text"
          placeholder="Search everything at Walmart online and in store"
          className="h-14 w-full p-2 pl-4 pr-10 rounded-full bg-white text-sm focus:outline-none"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full">
          <FaSearch className="w-6 h-6" />
        </button>
      </div>

      {/* Account and cart */}
      <div className="flex items-center gap-6 text-white">
        <div className="text-center hidden lg:block">
          <p className="text-sm">Reorder</p>
          <p className="font-bold">My Items</p>
        </div>
        <div className="text-center hidden lg:block">
          <p className="text-sm">Sign In</p>
          <p className="font-bold">Account</p>
        </div>
        <div className="relative">
          <FaShoppingCart className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 bg-yellow-500 text-purple-700 font-bold text-xs px-2 rounded-full">
            0
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-purple-700 text-white flex flex-col items-center p-4 space-y-4">
          {/* Only show "Reorder My Items" */}
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm">Reorder</p>
            <p className="font-bold">My Items</p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
