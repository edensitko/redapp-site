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
            bg: 'bg-white',
            hoverBg: 'hover:bg-gray-100',
            iconColor: 'text-[#25D366]',
            label: 'WhatsApp',
        },
        {
            icon: FaInstagram,
            href: `https://instagram.com/${instagramUsername}`,
            bg: 'bg-white',
            hoverBg: 'hover:bg-gray-100',
            iconColor: 'text-[#E4405F]',
            label: 'Instagram',
        },
        {
            icon: FaFacebook,
            href: `https://facebook.com/${facebookUsername}`,
            bg: 'bg-white',
            hoverBg: 'hover:bg-gray-100',
            iconColor: 'text-[#1877F2]',
            label: 'Facebook',
        },
    ];

    return (
        <div className="fixed bottom-6 left-4 z-[99999] flex flex-col items-end gap-4 md:bottom-8 md:right-8">
            {isOpen && (
                <div className="absolute bottom-full mb-4 flex flex-col gap-2">
                    {socialLinks.map((social, index) => {
                        const Icon = social.icon;
                        
                        return (
                            <a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 md:h-12 md:w-12 ${social.bg} ${social.hoverBg} ${social.iconColor}`}
                                style={{
                                    transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0) translateY(20px)',
                                    opacity: isOpen ? 1 : 0,
                                    transitionDelay: `${index * 100}ms`,
                                }}
                                aria-label={social.label}
                            >
                                <Icon className="h-5 w-5 md:h-6 md:w-6" />
                            </a>
                        );
                    })}
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-700 md:h-12 md:w-12"
                aria-label="Toggle social menu"
            >
                <FaShareAlt className="h-5 w-5 text-white md:h-6 md:w-6" />
            </button>
        </div>
    );
}
