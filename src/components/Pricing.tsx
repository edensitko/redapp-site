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
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
              תמחור
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            מחירים פשוטים ושקופים
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            בחרו את החבילה המתאימה לכם
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingPlans[selectedCategory].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`rounded-2xl p-8 
                ${plan.popular 
                  ? 'bg-white dark:bg-gray-800 shadow-xl dark:shadow-gray-800/30 border-2 border-primary-500/20 dark:border-primary-500/10' 
                  : 'bg-white/80 dark:bg-gray-800/80 shadow-lg dark:shadow-gray-800/20 border border-gray-200 dark:border-gray-700'}`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">₪{plan.price}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center text-gray-600 dark:text-gray-400">
                      <FaCheck className="h-5 w-5 text-primary-500 ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-all
                    ${plan.popular
                      ? 'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
                    }`}
                >
                  בחר תוכנית
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
