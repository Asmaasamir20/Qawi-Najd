import React, { useState } from "react";
import { FaWhatsapp, FaPhone, FaTimes, FaEnvelope } from "react-icons/fa";

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Toggle button */}
      <button
        onClick={toggleButtons}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${
          isOpen ? "bg-red-500 rotate-45" : "bg-[#F03E2F]"
        }`}>
        {isOpen ? (
          <FaTimes size={24} color="white" />
        ) : (
          <FaPhone size={24} color="white" />
        )}
      </button>

      {/* Buttons container */}
      <div
        className={`flex flex-col gap-4 mt-4 transition-all duration-300 ${
          isOpen
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 pointer-events-none transform translate-y-10"
        }`}>
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+201234567890" // استبدل برقم الواتساب الخاص بك
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <FaWhatsapp size={24} color="white" />
        </a>

        {/* Email Button */}
        <a
          href="mailto:example@gmail.com" // استبدل ببريدك الإلكتروني
          className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <FaEnvelope size={20} color="white" />
        </a>

        {/* Call Button */}
        <a
          href="tel:+201234567890" // استبدل برقم الهاتف الخاص بك
          className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <FaPhone size={20} color="white" />
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
