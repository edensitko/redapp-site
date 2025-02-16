import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaCode } from 'react-icons/fa';
import AboutComponent from '../components/About';

const AboutPage: React.FC = () => {
  const stats = [
    {
      value: '+200',
      label: 'פרויקטים מוצלחים'
    },
    {
      value: '+50',
      label: 'לקוחות מרוצים'
    },
    {
      value: '+5',
      label: 'שנות ניסיון'
    },
    {
      value: '+1000',
      label: 'שעות פיתוח'
    }
  ];

  const values = [
    {
      icon: <FaRocket />,
      title: 'חדשנות',
      description: 'אנחנו תמיד בחזית הטכנולוגיה, מביאים את הפתרונות המתקדמים ביותר'
    },
    {
      icon: <FaLightbulb />,
      title: 'יצירתיות',
      description: 'חשיבה מחוץ לקופסה מאפשרת לנו למצוא פתרונות ייחודיים לכל אתגר'
    },
    {
      icon: <FaUsers />,
      title: 'שירות',
      description: 'הלקוח במרכז - אנחנו כאן כדי להקשיב, להבין ולספק את המענה המושלם'
    },
    {
      icon: <FaCode />,
      title: 'מקצועיות',
      description: 'צוות המומחים שלנו מביא איתו ידע וניסיון רב בפיתוח פתרונות טכנולוגיים'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" dir="rtl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h1 
              className="text-4xl lg:text-5xl font-black mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              אודות RED
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              אנחנו מאמינים שטכנולוגיה צריכה להיות פשוטה, יעילה ונגישה לכולם.
              הצוות שלנו מחויב ליצור פתרונות דיגיטליים שיעזרו לעסק שלכם לצמוח ולהצליח.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <AboutComponent />

      {/* Mission Section */}
      <section className="relative py-24 overflow-hidden bg-gray-50" dir="rtl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              המשימה שלנו
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              להוביל את המהפכה הדיגיטלית בישראל דרך יצירת פתרונות טכנולוגיים חדשניים
              שמאפשרים לעסקים להתפתח, לצמוח ולהגיע להישגים חדשים.
            </motion.p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="group relative p-8 rounded-2xl
                         bg-white/60 backdrop-blur-md
                         border border-white/60
                         shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)]
                         hover:shadow-[0_8px_30px_-6px_rgba(239,68,68,0.2)]
                         hover:bg-white/80
                         transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex items-center justify-center w-16 h-16
                               bg-gradient-to-br from-white/80 to-white/40
                               backdrop-blur-sm
                               rounded-2xl
                               border border-white/60
                               group-hover:border-red-200/60
                               shadow-inner
                               transition-all duration-500">
                    <span className="text-2xl text-gray-600 group-hover:text-red-500 transition-colors duration-300">
                      {value.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden" dir="rtl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative p-8 rounded-2xl
                         bg-white/60 backdrop-blur-md
                         border border-white/60
                         shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)]
                         hover:shadow-[0_8px_30px_-6px_rgba(239,68,68,0.2)]
                         hover:bg-white/80
                         transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
