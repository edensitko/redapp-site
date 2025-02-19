'use client';

import { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaShareAlt } from 'react-icons/fa';

export default function FloatingSocialMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = '972542424246';
    const message = 'היי, אשמח לשמוע פרטים נוספים על השירותים שלכם';
    const instagramUsername = 'redapp.il';
    const facebookUsername = 'redapp.il';

    const socialLinks = [
        {
            icon: FaWhatsapp,
            href: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
            bg: 'bg-[#25D366]',
            hoverBg: 'hover:bg-[#20ba57]',
            label: 'WhatsApp',
        },
        {
            icon: FaInstagram,
            href: `https://instagram.com/${instagramUsername}`,
            bg: 'bg-[#E4405F]',
            hoverBg: 'hover:bg-[#d62e4c]',
            label: 'Instagram',
        },
        {
            icon: FaFacebook,
            href: `https://facebook.com/${facebookUsername}`,
            bg: 'bg-[#1877F2]',
            hoverBg: 'hover:bg-[#0d65d9]',
            label: 'Facebook',
        },
    ];

    return (
        <div className="fixed bottom-8 left-8 z-[99999]">
            {/* Social Media Buttons */}
            <div className="relative h-[10px]">
                {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    const bottomPosition = isOpen ? `${(index + 1) * 70}px` : '0';
                    
                    return (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`absolute left-0 w-14 h-14 ${social.bg} ${social.hoverBg} rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 group`}
                            style={{
                                bottom: bottomPosition,
                                opacity: isOpen ? 1 : 0,
                                visibility: isOpen ? 'visible' : 'hidden',
                                transitionProperty: 'all',
                                transitionDuration: '300ms',
                                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                            }}
                            aria-label={social.label}
                        >
                            <Icon size={28} />
                            <span className="absolute right-full mr-3 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                {social.label}
                            </span>
                        </a>
                    );
                })}
            </div>

            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative w-16 h-16 bg-primary-500 hover:bg-primary-600 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 ${isOpen ? 'rotate-45' : ''}`}
                aria-label="Toggle social media menu"
            >
                <FaShareAlt size={32} />
                <div className={`absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-25 ${isOpen ? 'hidden' : ''}`} />
            </button>
        </div>
    );
}
