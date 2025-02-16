import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck, FaTimes, FaGlobe, FaRobot, FaMobile, FaPaintBrush, FaCogs, FaRocket } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';

interface Category {
  id: string;
  name: string;
  icon: JSX.Element;
}

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  notIncluded: string[];
  popular: boolean;
}

const categories: Category[] = [
  { id: 'websites', name: 'אתרים', icon: <FaGlobe /> },
  { id: 'automation', name: 'אוטומציה', icon: <FaCogs /> },
  { id: 'bots', name: 'בוטים', icon: <FaRobot /> },
  { id: 'apps', name: 'אפליקציות', icon: <FaMobile /> },
  { id: 'branding', name: 'מיתוג', icon: <FaPaintBrush /> },
  { id: 'all', name: 'חבילות משולבות', icon: <FaRocket /> },
];

const pricingPlans: { [key: string]: PricingPlan[] } = {
  websites: [
    {
      name: 'דף נחיתה',
      price: 1499,
      description: 'דף נחיתה מקצועי ומותאם אישית',
      features: [
        'עיצוב מותאם אישית',
        'תאימות למובייל',
        'טפסי לידים',
        'אינטגרציה עם מערכות CRM',
        'אחסון ודומיין לשנה',
      ],
      notIncluded: ['תחזוקה חודשית', 'קידום אורגני', 'תוכן שיווקי'],
      popular: false,
    },
    {
      name: 'אתר עסקי',
      price: 2999,
      description: 'אתר מקצועי לעסקים קטנים ובינוניים',
      features: [
        'עד 5 עמודים',
        'עיצוב מותאם אישית',
        'פאנל ניהול',
        'אופטימיזציה למנועי חיפוש',
        'תמיכה טכנית',
        'אחסון ודומיין לשנה',
      ],
      notIncluded: ['חנות אונליין', 'שפות נוספות'],
      popular: true,
    },
    {
      name: 'אתר מסחר',
      price: 4999,
      description: 'חנות אונליין מלאה עם מערכת ניהול',
      features: [
        'מערכת ניהול מוצרים',
        'סליקת אשראי',
        'ניהול מלאי',
        'דוחות מכירות',
        'אינטגרציה עם שילוח',
        'רב-לשוני',
      ],
      notIncluded: [],
      popular: false,
    },
  ],
  automation: [
    {
      name: 'בסיסי',
      price: 999,
      description: 'אוטומציה בסיסית לתהליכים פשוטים',
      features: [
        'אוטומציה של תהליך אחד',
        'אינטגרציה בסיסית',
        'דוחות ביצועים',
        'תמיכה טכנית',
      ],
      notIncluded: ['אוטומציה מורכבת', 'API מותאם אישית'],
      popular: false,
    },
    {
      name: 'מתקדם',
      price: 2499,
      description: 'אוטומציה מתקדמת למספר תהליכים',
      features: [
        'אוטומציה של עד 3 תהליכים',
        'אינטגרציה מתקדמת',
        'API מותאם אישית',
        'דוחות מפורטים',
        'תמיכה 24/7',
      ],
      notIncluded: [],
      popular: true,
    },
  ],
  bots: [
    {
      name: 'צאט בוט',
      price: 1499,
      description: 'בוט צאט חכם לשירות לקוחות',
      features: [
        'למידת מכונה בסיסית',
        'אינטגרציה עם וואטסאפ/פייסבוק',
        'דוחות שיחות',
        'ממשק ניהול',
      ],
      notIncluded: ['AI מתקדם', 'אינטגרציה עם CRM'],
      popular: true,
    },
    {
      name: 'בוט AI',
      price: 3999,
      description: 'בוט מבוסס AI מתקדם',
      features: [
        'למידת מכונה מתקדמת',
        'זיהוי כוונות מתקדם',
        'אינטגרציה מלאה',
        'התאמה אישית מלאה',
        'דוחות אנליטיים',
      ],
      notIncluded: [],
      popular: false,
    },
  ],
  apps: [
    {
      name: 'אפליקציה בסיסית',
      price: 9999,
      description: 'אפליקציה בסיסית לאנדרואיד/iOS',
      features: [
        'עיצוב מותאם אישית',
        'פיתוח נייטיב',
        'אינטגרציה עם שרת',
        'פאנל ניהול',
      ],
      notIncluded: ['תכונות מתקדמות', 'אנליטיקס מתקדם'],
      popular: false,
    },
    {
      name: 'אפליקציה מתקדמת',
      price: 19999,
      description: 'אפליקציה מלאה עם תכונות מתקדמות',
      features: [
        'פיתוח מלא לשתי הפלטפורמות',
        'עיצוב UX/UI מתקדם',
        'אינטגרציה מלאה',
        'מערכת אנליטיקס',
        'פאנל ניהול מתקדם',
      ],
      notIncluded: [],
      popular: true,
    },
  ],
  branding: [
    {
      name: 'בסיסי',
      price: 2999,
      description: 'חבילת מיתוג בסיסית לעסקים',
      features: [
        'עיצוב לוגו',
        'כרטיס ביקור',
        'ניירת משרדית',
        'מדריך מיתוג בסיסי',
      ],
      notIncluded: ['אסטרטגיית מיתוג', 'חומרי שיווק'],
      popular: false,
    },
    {
      name: 'מקיף',
      price: 5999,
      description: 'חבילת מיתוג מקיפה',
      features: [
        'אסטרטגיית מיתוג',
        'עיצוב לוגו מתקדם',
        'חומרי שיווק מלאים',
        'מדריך מיתוג מקיף',
        'נוכחות דיגיטלית',
      ],
      notIncluded: [],
      popular: true,
    },
  ],
  all: [
    {
      name: 'סטארטאפ',
      price: 14999,
      description: 'חבילה מקיפה לעסקים מתחילים',
      features: [
        'אתר עסקי',
        'מיתוג בסיסי',
        'צאט בוט',
        'אוטומציה בסיסית',
        'תמיכה שנתית',
      ],
      notIncluded: ['אפליקציה', 'קמפיינים ממומנים'],
      popular: true,
    },
    {
      name: 'ארגוני',
      price: 29999,
      description: 'פתרון דיגיטלי מקיף לארגונים',
      features: [
        'אתר מסחר מתקדם',
        'מיתוג מקיף',
        'בוט AI',
        'אוטומציה מתקדמת',
        'אפליקציה בסיסית',
        'תמיכה VIP',
      ],
      notIncluded: [],
      popular: false,
    },
  ],
};

const Pricing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('websites');

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/50" dir="rtl" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            המחירים שלנו
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            מחירים שקופים ותחרותיים, ללא הפתעות
          </p>
        </motion.div>

        {/* Category Selection */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-800'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              <span>{category.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Pricing Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {pricingPlans[selectedCategory]?.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-900/50 overflow-hidden
                  ${plan.popular ? 'ring-2 ring-primary-500' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-6 transform translate-y-[-50%]">
                    <span className="inline-flex items-center gap-1 bg-primary-500 text-white px-3 py-1 text-sm font-medium rounded-full shadow-lg">
                      <HiSparkles className="w-4 h-4" />
                      פופולרי
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline mb-8">
                    <span className="text-4xl font-bold text-primary-500">₪{plan.price.toLocaleString()}</span>
                    <span className="mr-2 text-gray-500 dark:text-gray-400">חד פעמי</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">{plan.description}</p>
                  
                  <div className="space-y-4">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <FaCheck className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <FaTimes className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span className="text-gray-500 dark:text-gray-400 line-through">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 bg-gray-50 dark:bg-gray-800/50">
                  <button
                    className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300
                      ${plan.popular
                        ? 'bg-primary-500 text-white hover:bg-primary-600 shadow-lg shadow-primary-500/30'
                        : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                      }`}
                  >
                    בחר תוכנית
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Pricing;
