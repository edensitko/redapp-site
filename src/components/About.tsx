import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaCheck, FaCode, FaMobile, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
  const features = [
    {
      icon: <FaRocket className="w-5 h-5" />,
      title: 'פיתוח מהיר',
      description: 'אנחנו מספקים פתרונות במהירות וביעילות',
    },
    {
      icon: <FaCode className="w-5 h-5" />,
      title: 'טכנולוגיות מתקדמות',
      description: 'שימוש בטכנולוגיות החדשניות ביותר',
    },
    {
      icon: <FaMobile className="w-5 h-5" />,
      title: 'התאמה מושלמת',
      description: 'פיתוח מותאם לכל סוגי המכשירים',
    },
  ];

  return (
    <section className="relative  overflow-hidden" dir="rtl" id="about">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Side - Now First on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 lg:mt-0 lg:order-1"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
                מי אנחנו?
              </h2>
              <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
              <p className="text-lg  max-w-2xl mx-auto leading-relaxed">
                צוות מומחים בפיתוח אפליקציות ואתרים
              </p>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              המטרה שלנו היא לספק פתרונות טכנולוגיים מתקדמים שיעזרו לעסק שלכם לצמוח ולהתפתח.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 space-x-reverse"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center space-x-4 space-x-reverse">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
              >
                צור קשר
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
              >
                הפרויקטים שלנו
              </motion.a>
            </div>
          </motion.div>

          {/* Logo and Image Side - Now Second on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-2"
          >
            <div className="relative h-[400px] lg:h-[500px] mx-auto max-w-[80%] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/logo.png"
                alt="RedApp Logo"
                fill
                className="object-contain p-6"
                priority
              />
            </div>
            
            {/* Stats */}
            <div className="absolute bottom-6 left-1/2 transform  -translate-x-1/2 bg-white dark:bg-[#1e1e1e] rounded-xl shadow-xl p-6 w-[80%]">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">+10</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">פרויקטים</div>
                </div>
                <div className="text-center border-x border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-600">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">שביעות רצון</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">תמיכה</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
