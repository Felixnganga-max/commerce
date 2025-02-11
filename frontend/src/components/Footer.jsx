import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 to-indigo-900 text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Categories */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Shop Categories</h2>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 transition-all duration-300 cursor-pointer">
              Clothing
            </li>
            <li className="hover:text-gray-300 transition-all duration-300 cursor-pointer">
              Electronics
            </li>
            <li className="hover:text-gray-300 transition-all duration-300 cursor-pointer">
              Personal Care
            </li>
            <li className="hover:text-gray-300 transition-all duration-300 cursor-pointer">
              Home Decor
            </li>
            <li className="hover:text-gray-300 transition-all duration-300 cursor-pointer">
              Gifts
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex justify-center sm:justify-start space-x-5 text-xl">
            <FaFacebookF className="hover:text-gray-300 cursor-pointer transition-all duration-300" />
            <FaTwitter className="hover:text-gray-300 cursor-pointer transition-all duration-300" />
            <FaInstagram className="hover:text-gray-300 cursor-pointer transition-all duration-300" />
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaPhone /> +123 456 7890
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaEnvelope /> contact@ecommerce.com
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <FaMapMarkerAlt /> 123 E-Shop St, City, Country
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 opacity-80">
        © 2025 E-Commerce. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
