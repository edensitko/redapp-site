import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket } from 'react-icons/fa';

const CallToAction: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  return (
    <section className="relative z-10 -mt-32 pb-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-grid-primary-700/[0.05] bg-[size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent dark:from-primary-400/5" />
            <div className="absolute top-0 right-1/2 translate-x-1/2 h-1 w-32 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />
            
            <div className="relative px-6 py-12 sm:px-12 lg:px-16">
              <div className="max-w-5xl mx-auto text-center">
                <div className="inline-flex items-center justify-center p-2 px-4 mb-6 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 border border-primary-100 dark:border-primary-800">
                  <FaRocket className="w-4 h-4 ml-2" />
                  <span className="text-sm font-medium">מתחילים תוך 24 שעות</span>
                </div>
                
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent mb-4"
                >
                  יש לכם רעיון לאפליקציה?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
                >
                  השאירו פרטים ונחזור אליכם עם תוכנית פעולה מפורטת ומחיר מדויק
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative"
                >
                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-stretch bg-white dark:bg-gray-800 p-2 rounded-2xl shadow-md">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="flex-1 px-6 py-4 text-lg bg-gray-50 dark:bg-gray-700 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 dark:text-white transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="השם שלך"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 px-6 py-4 text-lg bg-gray-50 dark:bg-gray-700 border-0 rounded-xl focus:ring-2 focus:ring-primary-500 dark:text-white transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="טלפון ליצירת קשר"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25"
                    >
                      קבל הצעת מחיר
                    </motion.button>
                  </form>
                  <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                    אנחנו נחזור אליכם תוך 24 שעות עם תוכנית מפורטת ומחיר מדויק 🚀
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;