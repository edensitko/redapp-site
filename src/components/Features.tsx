import React from 'react';
import { motion } from 'framer-motion';
import { containerStyles, textStyles } from '../styles/design-system';

interface Feature {
  title: string;
  description: string;
  benefits: string[];
  icon: string;
  gradient: string;
}

const features: Feature[] = [
  {
    title: 'פיתוח אפליקציות מתקדמות',
    description:
      'פתרונות תוכנה חדשניים המותאמים לצרכים הייחודיים של העסק שלך',
    benefits: [
      'טכנולוגיות מתקדמות',
      'התאמה אישית מלאה',
      'ביצועים מהירים',
      'אבטחה מתקדמת',
    ],
    icon: '💻',
    gradient: 'from-red-400 via-red-500 to-blue-500',
  },
  {
    title: 'עיצוב חווית משתמש',
    description:
      'עיצוב ממשק משתמש מודרני ואינטואיטיבי שמספק חוויה מעולה',
    benefits: [
      'עיצוב מותאם אישית',
      'חוויית משתמש מעולה',
      'נגישות מלאה',
      'תמיכה בכל המכשירים',
    ],
    icon: '🎨',
    gradient: 'from-red-500 via-blue-500 to-red-400',
  },
  {
    title: 'אינטגרציה עם AI',
    description:
      'שילוב טכנולוגיות בינה מלאכותית מתקדמות לייעול תהליכים',
    benefits: [
      'למידת מכונה',
      'אוטומציה חכמה',
      'תובנות עסקיות',
      'התאמה אישית',
    ],
    icon: '🤖',
    gradient: 'from-blue-500 via-red-400 to-red-500',
  },
  {
    title: 'פיתוח אתרים מתקדם',
    description:
      'בניית אתרים מודרניים ומרשימים עם טכנולוגיות חדשניות',
    benefits: [
      'עיצוב רספונסיבי',
      'אופטימיזציה למנועי חיפוש',
      'ביצועים מהירים',
      'חווית משתמש מעולה',
    ],
    icon: '🌐',
    gradient: 'from-purple-500 via-red-400 to-blue-500',
  },
  {
    title: 'אבטחת מידע',
    description:
      'הגנה על המידע והנכסים הדיגיטליים שלך עם פתרונות אבטחה מתקדמים',
    benefits: [
      'הצפנת מידע',
      'אבטחת תקשורת',
      'הגנה מפני התקפות',
      'גיבוי ושחזור',
    ],
    icon: '🔒',
    gradient: 'from-red-400 via-purple-500 to-blue-500',
  },
  {
    title: 'ייעוץ טכנולוגי',
    description:
      'ליווי מקצועי והכוונה בבחירת הפתרונות הטכנולוגיים המתאימים',
    benefits: [
      'אסטרטגיה דיגיטלית',
      'ייעוץ ארכיטקטורה',
      'בחירת טכנולוגיות',
      'תכנון פרויקטים',
    ],
    icon: '💡',
    gradient: 'from-blue-500 via-red-400 to-purple-500',
  },
];

const Features: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            היתרונות שלנו
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            למה לבחור בנו? הנה כמה סיבות טובות
          </p>
        </div>
          
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block px-6 py-2 mb-6 rounded-full 
                   bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                   border border-gray-200 dark:border-gray-700 
                   shadow-sm hover:shadow-md transition-shadow
                   dark:shadow-gray-800/30"
        >
          <span className="text-lg font-medium bg-gradient-to-r from-primary-600 to-red-500 bg-clip-text text-transparent">
            יתרונות
          </span>
        </motion.div>
        <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
          למה לבחור בנו?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          אנחנו מספקים פתרונות דיגיטליים מתקדמים שעוזרים לעסקים להצליח
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-200 
                       shadow-[0_8px_32px_-4px_rgba(0,0,0,0.1)]
                       transition-all duration-300
                       hover:shadow-[0_12px_40px_-8px_rgba(0,0,0,0.15)]"
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center
                          bg-gradient-to-br from-red-500 to-red-600
                          rounded-xl text-white text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
