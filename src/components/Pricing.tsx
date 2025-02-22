'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('websites');

  const tabs = [
    { id: 'websites', label: 'אתרים' },
    { id: 'applications', label: 'אפליקציות' },
    { id: 'ecommerce', label: 'חנויות אונליין' },
    { id: 'marketing', label: 'שיווק דיגיטלי' },
  ];

  const pricingData = {
    websites: [
      {
        name: 'דף נחיתה',
        price: '2,500',
        features: [
          'עיצוב מותאם אישית',
          'תצוגה מותאמת למובייל',
          'טפסי יצירת קשר',
          'אינטגרציה עם Google Analytics',
          'אחסון ודומיין לשנה',
          'תמיכה טכנית',
        ],
      },
      {
        name: 'אתר תדמית',
        price: '4,500',
        popular: true,
        features: [
          'עד 5 עמודים',
          'עיצוב פרימיום',
          'אופטימיזציה למנועי חיפוש',
          'פאנל ניהול',
          'חיבור לרשתות חברתיות',
          'תמיכה טכנית מורחבת',
          'עדכונים שוטפים',
        ],
      },
      {
        name: 'אתר מתקדם',
        price: '8,000',
        features: [
          'עד 10 עמודים',
          'עיצוב פרימיום+',
          'מערכת ניהול תוכן מתקדמת',
          'בלוג מובנה',
          'אינטגרציה עם CRM',
          'אבטחה מתקדמת',
          'גיבוי אוטומטי',
          'תמיכה 24/7',
        ],
      },
    ],
    applications: [
      {
        name: 'MVP',
        price: '15,000',
        features: [
          'אפיון ראשוני',
          'עיצוב UI/UX בסיסי',
          'פיתוח אפליקציה בסיסית',
          'פלטפורמה אחת לבחירה',
          'שרת בסיסי',
          'תמיכה טכנית',
        ],
      },
      {
        name: 'סטנדרט',
        price: '25,000',
        popular: true,
        features: [
          'אפיון מפורט',
          'עיצוב UI/UX מתקדם',
          'פיתוח לשתי פלטפורמות',
          'שרת מתקדם',
          'מערכת ניהול',
          'אינטגרציות חיצוניות',
          'תמיכה מורחבת',
        ],
      },
      {
        name: 'פרימיום',
        price: '50,000',
        features: [
          'אפיון מלא ומפורט',
          'עיצוב UI/UX פרימיום',
          'פיתוח רב-פלטפורמה',
          'שרת מתקדם עם אוטוסקיילינג',
          'מערכת ניהול מתקדמת',
          'אינטגרציות מורכבות',
          'אבטחה מתקדמת',
          'תמיכה 24/7',
        ],
      },
    ],
    ecommerce: [
      {
        name: 'בסיסי',
        price: '5,000',
        features: [
          'עד 100 מוצרים',
          'עיצוב מותאם',
          'סליקת אשראי',
          'ניהול מלאי בסיסי',
          'דוחות מכירה',
          'תמיכה טכנית',
        ],
      },
      {
        name: 'עסקי',
        price: '12,000',
        popular: true,
        features: [
          'עד 1000 מוצרים',
          'עיצוב פרימיום',
          'מערכת הנחות',
          'ניהול מלאי מתקדם',
          'אינטגרציה עם ספקים',
          'מערכת שליחויות',
          'דוחות מתקדמים',
        ],
      },
      {
        name: 'מסחרי',
        price: '25,000',
        features: [
          'ללא הגבלת מוצרים',
          'עיצוב פרימיום+',
          'מערכת הנחות מתקדמת',
          'ניהול מלאי אוטומטי',
          'אינטגרציה מלאה עם ERP',
          'מערכת נאמנות לקוחות',
          'אופטימיזציה למנועי חיפוש',
          'תמיכה 24/7',
        ],
      },
    ],
    marketing: [
      {
        name: 'בסיסי',
        price: '2,000',
        features: [
          'ניהול רשתות חברתיות',
          'קידום ממומן בסיסי',
          'דוח חודשי',
          'אופטימיזציה בסיסית',
          'ייעוץ שיווקי',
        ],
      },
      {
        name: 'מקצועי',
        price: '4,000',
        popular: true,
        features: [
          'ניהול רשתות חברתיות מורחב',
          'קידום ממומן מתקדם',
          'קידום אורגני',
          'יצירת תוכן',
          'אסטרטגיה שיווקית',
          'דוחות שבועיים',
        ],
      },
      {
        name: 'פרימיום',
        price: '8,000',
        features: [
          'ניהול רשתות חברתיות מלא',
          'קידום ממומן פרימיום',
          'קידום אורגני מתקדם',
          'יצירת תוכן מקצועי',
          'אסטרטגיה שיווקית מקיפה',
          'מעקב וניתוח מתקדם',
          'דוחות יומיים',
          'ליווי אישי',
        ],
      },
    ],
  };

  return (
    <section className="relative py-20 overflow-hidden" dir="rtl" id="pricing">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] right-[20%] w-[800px] h-[800px] bg-gradient-to-br from-primary-500/20 via-red-500/10 to-transparent rounded-full blur-3xl transform rotate-12" />
      </div>

      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary-500 to-primary-900 dark:from-primary-300 dark:to-primary-500 text-transparent bg-clip-text mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            חבילות ומחירים
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            בחרו את החבילה המתאימה לכם
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData[activeTab as keyof typeof pricingData].map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? 'border-2 border-primary-500 dark:border-primary-400'
                  : 'border border-gray-200 dark:border-gray-700'
              } bg-white dark:bg-gray-800 shadow-xl`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    פופולרי
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">₪{plan.price}</span>
                </div>
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                      <FaCheck className="text-primary-500 dark:text-primary-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium
                    shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                >
                  בחר חבילה
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
