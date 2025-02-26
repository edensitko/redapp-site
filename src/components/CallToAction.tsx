'use client';

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
  };

  return (
    <section className="relative -mt-32 pb-20 overflow-hidden" dir="rtl">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      <div className="relative z-5 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-2xl dark:shadow-gray-900/50 overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute inset-0 bg-grid-primary-700/[0.05] bg-[size:20px_20px]" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent dark:from-primary-400/10" />
            
            <div className="relative px-6 py-12 sm:px-12 lg:px-16">
              <div className="max-w-5xl mx-auto text-center">
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
                  <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-stretch bg-white/80 dark:bg-gray-800/80 p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] backdrop-blur-sm border border-white/20 dark:border-gray-700/30">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="flex-1 px-6 py-4 text-lg bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 dark:text-white transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      placeholder="השם שלך"
                    />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="flex-1 px-6 py-4 text-lg bg-white dark:bg-gray-700 border border-gray-100 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 dark:text-white transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
                      placeholder="טלפון ליצירת קשר"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="flex-1 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl hover:from-primary-700 hover:to-primary-600 transition-all duration-300 shadow-[0_10px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] transform hover:-translate-y-1"
                    >
                      קבל הצעת מחיר
                    </motion.button>
                  </form>
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary-500/10 rounded-full blur-3xl"></div>
                  <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-primary-500/10 rounded-full blur-3xl"></div>
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