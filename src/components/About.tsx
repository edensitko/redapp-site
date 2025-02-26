import React from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FaCode, FaMobile, FaRocket } from 'react-icons/fa';

const About: React.FC = () => {
  const features = [
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: 'פיתוח מהיר',
      description: 'אנחנו מספקים פתרונות במהירות וביעילות',
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: 'טכנולוגיות מתקדמות',
      description: 'שימוש בטכנולוגיות החדשניות ביותר',
    },
    {
      icon: <FaMobile className="w-6 h-6" />,
      title: 'התאמה מושלמת',
      description: 'פיתוח מותאם לכל סוגי המכשירים',
    },
  ];

  // Optional: Using viewport scroll to add a subtle parallax effect
  const { scrollY } = useViewportScroll();
  const yRange = useTransform(scrollY, [0, 300], [0, -50]);
  const opacityRange = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <section className="relative py-20 overflow-hidden" dir="rtl" id="services">
    {/* Grid Background Pattern */}
    <div className="absolute inset-0">
      <div className="absolute inset-10 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />
    </div>

    {/* Abstract Shapes */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[300px] h-[200px] bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl dark:from-primary-500/10" />
      <div className="absolute bottom-1/2 left-0 w-[200px] h-[300px] bg-gradient-to-bl from-red-500/20 to-transparent rounded-full blur-3xl dark:from-red-500/10" />
    </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div style={{ y: yRange, opacity: opacityRange }} className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-10 lg:mt-0 lg:order-1"
          >
            <div className="text-center lg:text-right mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-2">
                מי אנחנו?
              </h2>
              <div className="w-48 h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto lg:mx-0 mb-4" />
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0">
                צוות מומחים בפיתוח אפליקציות ואתרים
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              המטרה שלנו היא לספק פתרונות טכנולוגיים מתקדמים שיעזרו לעסק שלכם לצמוח ולהתפתח.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 space-x-reverse"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 shadow-md">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary-600 text-white font-medium shadow-md hover:bg-primary-700 transition-colors duration-200"
              >
                צור קשר
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-medium hover:border-primary-600 hover:text-primary-600 transition-colors duration-200"
              >
                הפרויקטים שלנו
              </motion.a>
            </div>
          </motion.div>

          {/* Image and Stats Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative lg:order-2 flex flex-col items-center mt-10 lg:mt-0"
          >
            <div className="relative h-[400px] lg:h-[500px] w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl mb-8">
              <Image
                src="/logo.png"
                alt="RedApp Logo"
                width={500}
                height={500}
                className="object-contain w-full h-full"
                priority
              />
            </div>

            {/* Stats */}
            <div className="relative w-full max-w-lg">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[#1e1e1e] rounded-xl shadow-xl p-6 w-full">
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
