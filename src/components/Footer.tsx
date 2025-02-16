import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const footerLinks = {
    services: [
      { name: 'פיתוח אתרים', href: '#web-development' },
      { name: 'אוטומציה', href: '#automation' },
      { name: 'אינטגרציות', href: '#integrations' },
      { name: 'תמיכה טכנית', href: '#support' },
    ],
    company: [
      { name: 'אודות', href: '#about' },
      { name: 'צור קשר', href: '#contact' },
      { name: 'בלוג', href: '/blog' },
      { name: 'קריירה', href: '#careers' },
    ],
    social: [
      { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
      { name: 'GitHub', icon: FaGithub, href: 'https://github.com' },
      { name: 'Email', icon: FaEnvelope, href: 'mailto:contact@red-softwares.com' },
    ],
  };

  return (
    <motion.footer
      className="relative bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 py-16 w-full border-t border-gray-100 dark:border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Red Logo" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mr-3">Red</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">פתרונות דיגיטליים מתקדמים לעסקים</p>
            <div className="flex gap-4">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">שירותים</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">חברה</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">צור קשר</h4>
            <address className="text-gray-600 dark:text-gray-400 not-italic space-y-4">
              <p className="flex items-center">
                <span className="font-medium">טלפון:</span>
                <a href="tel:+972-54-XXX-XXXX" className="mr-2 hover:text-primary-500 dark:hover:text-primary-400">
                  054-XXX-XXXX
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-medium">אימייל:</span>
                <a href="mailto:contact@red-softwares.com" className="mr-2 hover:text-primary-500 dark:hover:text-primary-400">
                  contact@red-softwares.com
                </a>
              </p>
              <p className="flex items-center">
                <span className="font-medium">כתובת:</span>
                <span className="mr-2">תל אביב, ישראל</span>
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Red. כל הזכויות שמורות.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
