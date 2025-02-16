import React from 'react';
import { motion } from 'framer-motion';
import { FaMobile, FaGlobe, FaRobot, FaShoppingCart, FaCode, FaServer } from 'react-icons/fa';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaMobile className="w-6 h-6" />,
      title: 'פיתוח אפליקציות',
      description: 'פיתוח אפליקציות מותאמות אישית לאנדרואיד ו-iOS עם חווית משתמש מתקדמת',
      features: ['React Native', 'Flutter', 'UI/UX מותאם אישית', 'אינטגרציה מלאה'],
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      icon: <FaGlobe className="w-6 h-6" />,
      title: 'פיתוח אתרים',
      description: 'בניית אתרים מודרניים ומותאמים לכל המכשירים עם טכנולוגיות מתקדמות',
      features: ['Next.js', 'React', 'WordPress', 'חנויות אונליין'],
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      icon: <FaRobot className="w-6 h-6" />,
      title: 'אוטומציה ובינה מלאכותית',
      description: 'פתרונות חכמים לייעול תהליכים עסקיים ואינטגרציה של בינה מלאכותית',
      features: ['צאט בוטים', 'אוטומציה', 'עיבוד נתונים', 'מערכות ML'],
      gradient: 'from-green-500 to-emerald-400',
    },
    {
      icon: <FaShoppingCart className="w-6 h-6" />,
      title: 'מסחר אלקטרוני',
      description: 'הקמת חנויות אונליין מתקדמות עם מערכות תשלום ומלאי אוטומטיות',
      features: ['Shopify', 'WooCommerce', 'מערכות תשלום', 'ניהול מלאי'],
      gradient: 'from-orange-500 to-yellow-400',
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: 'פיתוח תוכנה',
      description: 'פיתוח פתרונות תוכנה מותאמים אישית לצרכים העסקיים שלכם',
      features: ['Node.js', 'Python', 'Java', 'מערכות ארגוניות'],
      gradient: 'from-red-500 to-pink-400',
    },
    {
      icon: <FaServer className="w-6 h-6" />,
      title: 'תשתיות ענן',
      description: 'הקמה וניהול של תשתיות ענן מתקדמות עם אבטחה מקסימלית',
      features: ['AWS', 'Google Cloud', 'Azure', 'DevOps'],
      gradient: 'from-indigo-500 to-blue-400',
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-4 rounded-full bg-primary-50 dark:bg-primary-900/30"
          >
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              הפתרונות שלנו
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            השירותים המקצועיים שלנו
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            אנחנו מציעים מגוון רחב של שירותי פיתוח ופתרונות טכנולוגיים מתקדמים
          </motion.p>
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
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <div className="relative p-6">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
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
