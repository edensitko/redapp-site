'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppContainer = () => {
  const phoneNumber = '972542424246';
  const message = 'היי, אשמח לשמוע פרטים נוספים על השירותים שלכם';

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20ba57] md:bottom-8 md:right-8 md:h-14 md:w-14"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp className="h-6 w-6 md:h-7 md:w-7" />
    </a>
  );
};

export default WhatsAppContainer;
