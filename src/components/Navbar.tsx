import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from 'next-themes';

interface NavbarProps {
  scrolled?: boolean;
}

const navLinks = [
  { name: 'בית', href: '/', label: 'בית' },
  { name: 'שירותים', href: '#services', label: 'שירותים' },
  { name: 'פרויקטים', href: '#projects', label: 'פרויקטים' },
  { name: 'תמחור', href: '#pricing', label: 'תמחור' },
  { name: 'בלוג', href: '/blog', label: 'בלוג' },
  { name: 'צור קשר', href: '#contact', label: 'צור קשר' },
];

const Navbar: React.FC<NavbarProps> = ({ scrolled = false }) => {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-3 left-0 right-0 z-50 flex justify-center px-2"
    >
      <nav
        className={`w-full max-w-[95%] transition-all duration-500 rounded-2xl border
          ${scrolled 
            ? 'py-2 bg-white/95 dark:bg-dark-100/95 backdrop-blur-lg shadow-lg border-gray-200 dark:border-gray-700/30 scale-[0.98] -translate-y-1'
            : 'py-4 bg-transparent dark:bg-transparent border-transparent dark:border-transparent hover:bg-white/10 dark:hover:bg-dark-100/10'
          }`}
        dir="rtl"
      >
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <div className="relative w-28 h-20">
                  <Image
                    src="/logo.png"
                    alt="Logo"
                    className="object-contain dark:hidden"
                    priority
                    fill
                  />
                  <Image
                    src="/logo.white.png"
                    alt="Logo"
                    fill
                    className="object-contain hidden dark:block"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex items-center gap-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-800 dark:text-gray-300 hover:text-primary-600 
                    dark:hover:text-primary-400 transition-colors duration-200 text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center  w-34 justify-end">
              {/* Call to Action Button */}
              <Link 
                href="/contact"
                className="inline-flex items-center px-2.5 py-2 m-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 gap-2"
              >
בואו נדבר      </Link>

              {/* Theme Toggle Button */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 ml-2"
                aria-label="Toggle Menu"
              >
                <div className="w-5 h-5 flex flex-col justify-between">
                  <span className={`block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                  <span className={`block h-0.5 w-5 bg-current transition duration-500 ease-in-out ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`block h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden bg-white dark:bg-gray-800 rounded-b-2xl border-t border-gray-200 dark:border-gray-700"
              >
                <div className="px-4 py-3 space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-3 py-2 rounded-lg text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
