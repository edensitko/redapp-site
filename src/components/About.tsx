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
    <section className="py-20 bg-white dark:bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Logo and Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/logo.png"
                alt="RedApp Logo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                priority
                className="object-contain p-8 dark:hidden"
              />
              <Image
                src="/logo.white.png"
                alt="RedApp Logo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={95}
                priority
                className="object-contain p-8 hidden dark:block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent" />
            </div>
            
            {/* Stats */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 w-[80%]">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">+100</div>
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

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 lg:mt-0"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              מי אנחנו?
              <span className="block text-primary-600 mt-2">רדאפ - פיתוח אפליקציות ואתרים</span>
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              אנחנו צוות מומחים בפיתוח אפליקציות ואתרים, עם ניסיון של שנים בתעשייה. 
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
        </div>
      </div>
    </section>
  );
};

export default About;
