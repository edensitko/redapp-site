import React from 'react';
import { motion } from 'framer-motion';
import LottieIcon from './LottieIcon';

const Services: React.FC = () => {
  const services = [
    {
      title: 'פיתוח אפליקציות',
      description: 'פיתוח אפליקציות מותאמות אישית לצרכים העסקיים שלך',
      features: ['React Native', 'Flutter', 'iOS', 'Android'],
      gradient: 'from-purple-500 to-indigo-400',
    },
    {
      title: 'פיתוח אתרים',
      description: 'בניית אתרים מודרניים ומותאמים לכל המכשירים עם טכנולוגיות מתקדמות',
      features: ['Next.js', 'React', 'WordPress', 'חנויות אונליין'],
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      title: 'אבטחת מידע',
      description: 'הגנה על המידע והנכסים הדיגיטליים שלך מפני איומי סייבר',
      features: ['אבטחת רשת', 'הצפנת מידע', 'בדיקות חדירה', 'ניטור אבטחה'],
      gradient: 'from-red-500 to-pink-400',
    },
    {
      title: 'ייעוץ טכנולוגי',
      description: 'ייעוץ מקצועי לבחירת הטכנולוגיות המתאימות ביותר לעסק שלך',
      features: ['ארכיטקטורת מערכת', 'בחירת טכנולוגיות', 'תכנון פרויקטים', 'ליווי טכני'],
      gradient: 'from-green-500 to-emerald-400',
    },
    {
      title: 'UI/UX עיצוב',
      description: 'עיצוב ממשק משתמש מודרני וחווית משתמש אינטואיטיבית',
      features: ['עיצוב ממשק', 'חווית משתמש', 'מיתוג', 'פרוטוטייפינג'],
      gradient: 'from-yellow-500 to-orange-400',
    },
    {
      title: 'תחזוקה ותמיכה',
      description: 'תמיכה טכנית ותחזוקה שוטפת למערכות קיימות',
      features: ['תמיכה טכנית', 'עדכוני מערכת', 'גיבוי מידע', 'ניטור ביצועים'],
      gradient: 'from-pink-500 to-rose-400',
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden" dir="rtl" id="services">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-10 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-500/20 to-transparent rounded-full blur-3xl dark:from-primary-500/10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-red-500/20 to-transparent rounded-full blur-3xl dark:from-red-500/10" />
      </div>

      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            השירותים שלנו
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            פתרונות מקצועיים המותאמים לצרכים שלכם
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[rgb(36,37,37)] rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-[rgb(46,47,47)]"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative p-6">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-r ${service.gradient}`}>
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12"
                  >
                    <LottieIcon />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} ml-2`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 left-6 transform translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                  <div className={`text-lg bg-gradient-to-br ${service.gradient} bg-clip-text text-transparent`}>
                    ←
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
