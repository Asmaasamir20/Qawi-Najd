import React, { useState } from "react";
import {
  FaWhatsapp,
  FaPhone,
  FaTimes,
  FaEnvelope,
  FaPlus,
} from "react-icons/fa";

// لا يقبل أي معلمات للغة
const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  // ثابت على اليمين دائمًا بغض النظر عن اللغة
  return (
    <div className="fixed bottom-10 right-4 z-50" dir="ltr">
      <div className="flex flex-row items-center">
        {/* Buttons container - always on the right */}
        <div
          className={`grid grid-cols-1 gap-3 mr-3 transition-all duration-300 ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 pointer-events-none scale-75"
          }`}>
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <FaWhatsapp size={24} color="white" />
          </a>

          {/* Email Button */}
          <a
            href="mailto:example@gmail.com"
            className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <FaEnvelope size={24} color="white" />
          </a>

          {/* Call Button */}
          <a
            href="tel:+201234567890"
            className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <FaPhone size={24} color="white" />
          </a>
        </div>

        {/* Toggle button */}
        <button
          onClick={toggleButtons}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
            isOpen ? "bg-red-500 rotate-45" : "bg-red-500"
          }`}>
          {isOpen ? (
            <FaTimes size={24} color="white" />
          ) : (
            <FaPlus size={24} color="white" />
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingButtons;
