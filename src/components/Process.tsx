import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaLaptopCode, FaCheckCircle } from 'react-icons/fa';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <FaRocket className="text-2xl" />,
      title: 'אפיון ותכנון',
      description: 'מגדירים את הצרכים והמטרות של הפרויקט',
      gradient: 'from-blue-500 to-purple-500'
    },
    {
      icon: <FaCode className="text-2xl" />,
      title: 'פיתוח',
      description: 'מפתחים את הפתרון בהתאם לדרישות',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <FaLaptopCode className="text-2xl" />,
      title: 'בדיקות',
      description: 'בודקים את המערכת ומוודאים שהכל עובד כמו שצריך',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      icon: <FaCheckCircle className="text-2xl" />,
      title: 'השקה',
      description: 'מעלים את המערכת לאוויר ומתחילים לעבוד',
      gradient: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" dir="rtl" id="process">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-gradient-to-tr from-primary-500/20 via-red-500/10 to-transparent rounded-full blur-3xl dark:from-primary-500/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 mb-6 rounded-full 
                     bg-white dark:bg-[rgb(36,37,37)]
                     border border-gray-200 dark:border-[rgb(46,47,47)]
                     transition-shadow"
          >
            <span className="text-lg font-medium bg-gradient-to-r from-primary-600 to-red-500 bg-clip-text text-transparent">
              תהליך העבודה
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            איך אנחנו עובדים
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            תהליך העבודה שלנו מבטיח תוצאות מעולות ושקיפות מלאה
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-white dark:bg-[rgb(36,37,37)] rounded-2xl p-8 border border-gray-100 dark:border-[rgb(46,47,47)] relative z-10 
                          transition-all duration-300 group-hover:-translate-y-1">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Icon Container */}
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center mb-6 
                               transform transition-transform duration-300 group-hover:scale-110">
                    {step.icon}
                  </div>
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-full opacity-20 blur-xl`}
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-0 w-full">
                  <div className="h-1 bg-gradient-to-r from-primary-500/20 to-red-500/20 transform -translate-y-1/2 z-0" />
                  <div className="absolute top-1/2 right-0 w-3 h-3 bg-primary-500/30 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
