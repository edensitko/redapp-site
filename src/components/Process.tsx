import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'גילוי ואפיון',
      description: 'אנחנו מתחילים בהבנת המטרות העסקיות, הדרישות והחזון שלך לפרויקט',
      color: 'from-blue-500 to-purple-500',
    },
    {
      number: '02',
      title: 'תכנון',
      description: 'הצוות שלנו יוצר מפת דרכים מפורטת עם אבני דרך ותוצרים',
      color: 'from-purple-500 to-pink-500',
    },
    {
      number: '03',
      title: 'פיתוח',
      description: 'אנחנו בונים את הפתרון שלך באמצעות טכנולוגיות מתקדמות ושיטות עבודה מומלצות',
      color: 'from-pink-500 to-red-500',
    },
    {
      number: '04',
      title: 'בדיקות',
      description: 'בדיקות קפדניות מבטיחות שהפתרון שלך עובד בצורה מושלמת בכל הפלטפורמות',
      color: 'from-red-500 to-orange-500',
    },
    {
      number: '05',
      title: 'השקה',
      description: 'אנחנו מטמיעים את הפתרון ומספקים תמיכה מקיפה להשקה חלקה',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <section id="process" className="relative py-24 overflow-hidden" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Section Title */}
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6">
              תהליך העבודה שלנו
            </h2>
            <div className="w-full h-1.5 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-6">
            אנחנו עובדים בגישה מובנית כדי להבטיח שכל פרויקט מבוצע במצוינות ועומד ביעדים העסקיים שלך
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 dark:from-primary-500/30 dark:to-secondary-500/30 transform -translate-y-1/2" />

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/20">
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                  {/* Number */}
                  <div className="relative mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r dark:opacity-90 shadow-lg transform group-hover:scale-110 transition-transform duration-300 border border-white/20 dark:border-gray-700/20 backdrop-blur-sm">
                      <div className={`text-xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {step.description}
                  </p>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${step.color} rounded-full opacity-10 blur-xl`}
                  />
                </div>

                {/* Connection Dot */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
