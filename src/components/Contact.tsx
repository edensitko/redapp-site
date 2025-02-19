import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-5 h-5" />,
      title: 'טלפון',
      value: '054-XXX-XXXX',
      href: 'tel:+972XXXXXXXXX',
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      title: 'וואטסאפ',
      value: 'שלח הודעה',
      href: 'https://wa.me/972XXXXXXXXX',
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      title: 'אימייל',
      value: 'info@redapp.co.il',
      href: 'mailto:info@redapp.co.il',
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      title: 'כתובת',
      value: 'תל אביב, ישראל',
      href: 'https://maps.google.com/?q=Tel+Aviv',
    },
  ];

  return (
    <section className="relative py-20 bg-gray-50 dark:bg-[#1e1e1e] overflow-hidden" dir="rtl" id="contact">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] right-[10%] w-[700px] h-[700px] bg-gradient-to-tl from-red-500/20 via-primary-500/5 to-transparent rounded-full blur-3xl transform -rotate-45" />
        <div className="absolute -bottom-[50%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tl from-red-500/20 via-primary-500/10 to-transparent rounded-full blur-3xl transform rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            צור קשר
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            השאירו פרטים ונחזור אליכם בהקדם עם פתרון מותאם אישית
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start p-4 rounded-xl bg-gray-50 dark:bg-[#252525] hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  {item.icon}
                </div>
                <div className="mr-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 bg-white dark:bg-[#1e1e1e] rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#252525] border-0 focus:ring-2 focus:ring-primary-500 dark:text-white transition-colors duration-200"
                    placeholder="הכנס את שמך המלא"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    טלפון
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#252525] border-0 focus:ring-2 focus:ring-primary-500 dark:text-white transition-colors duration-200"
                    placeholder="הכנס מספר טלפון"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    אימייל
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#252525] border-0 focus:ring-2 focus:ring-primary-500 dark:text-white transition-colors duration-200"
                    placeholder="הכנס את האימייל שלך"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    חברה
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#252525] border-0 focus:ring-2 focus:ring-primary-500 dark:text-white transition-colors duration-200"
                    placeholder="שם החברה (לא חובה)"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  הודעה
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-[#252525] border-0 focus:ring-2 focus:ring-primary-500 dark:text-white transition-colors duration-200 resize-none"
                  placeholder="ספר לנו על הפרויקט שלך"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25"
              >
                שלח הודעה
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
