'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '972542424246';
  const message = 'היי, אשמח לשמוע פרטים נוספים על השירותים שלכם';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 relative"
    >
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping" />
      
      {/* Icon container */}
      <span className="absolute inset-0 flex items-center justify-center">
        <FaWhatsapp className="w-8 h-8 text-white" />
      </span>
    </a>
  );
};

export default WhatsAppButton;
