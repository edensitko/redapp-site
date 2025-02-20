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
        <div className="fixed bottom-2 left-2 z-999 flex flex-col items-end gap-4 md:bottom-8 md:right-8">
            {isOpen && (
                <div className="flex flex-col gap-2">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        const bottomPosition = isOpen ? `${(index + 1) * 60}px` : '0';
                        
                        return (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:scale-110 md:h-12 md:w-12 ${social.bg} ${social.hoverBg}`}
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
                                <Icon size={20} className="md:h-6 md:w-6" />
                                <span className="absolute right-full mr-3 px-2 py-2 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {social.label}
                                </span>
                            </a>
                        );
                    })}
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex h-12 p-3 w-12 items-center justify-center rounded-full bg-primary-500 hover:bg-primary-600 shadow-lg transition-colors duration-300 hover:scale-110 md:h-14 md:w-14 ${isOpen ? 'rotate-45' : ''}`}
                aria-label="Toggle social media menu"
            >
                <FaShareAlt size={32} className="text-white" />
                <div className={`absolute left-1 bottom-1  bg-primary-500 w-12 h-12  z-10 rounded-full animate-ping opacity-25 ${isOpen ? 'hidden' : ''}`} />
            </button>
        </div>
    );
}
