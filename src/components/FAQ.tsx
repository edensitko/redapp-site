'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'איך מתחילים פרויקט חדש?',
      answer: 'התהליך מתחיל בפגישת ייעוץ חינם בה נבין את הצרכים שלכם ונגבש תוכנית פעולה מותאמת אישית. אנחנו נלווה אתכם בכל שלב בדרך להצלחה.'
    },
    {
      question: 'כמה זמן לוקח לפתח אפליקציה?',
      answer: 'זמן הפיתוח תלוי במורכבות האפליקציה והדרישות שלכם. בדרך כלל, פרויקט בסיסי לוקח 2-3 חודשים, בעוד שפרויקטים מורכבים יותר עשויים להימשך 4-6 חודשים.'
    },
    {
      question: 'האם אתם מספקים תמיכה לאחר ההשקה?',
      answer: 'כן, אנחנו מציעים חבילות תמיכה ותחזוקה שונות כדי להבטיח שהמוצר שלכם ימשיך לפעול בצורה חלקה. התמיכה כוללת תיקוני באגים, עדכוני אבטחה ושיפורים שוטפים.'
    },
    {
      question: 'איזה טכנולוגיות אתם משתמשים?',
      answer: 'אנחנו משתמשים בטכנולוגיות המתקדמות ביותר כולל React, Next.js, Node.js, Python, ו-AI/ML. הבחירה בטכנולוגיה נעשית בהתאם לצרכים הספציפיים של כל פרויקט.'
    },
    {
      question: 'מה העלות של פיתוח אפליקציה?',
      answer: 'העלות משתנה בהתאם למורכבות הפרויקט והדרישות שלכם. אנחנו מציעים הצעת מחיר מפורטת לאחר פגישת ייעוץ ראשונית בה נבין את הצרכים המדויקים שלכם.'
    },
    {
      question: 'האם אתם מספקים שירותי עיצוב?',
      answer: 'כן, יש לנו צוות מעצבים מנוסה שמתמחה ב-UI/UX. אנחנו מספקים פתרון מלא מהקונספט ועד לעיצוב הסופי, תוך שימת דגש על חווית משתמש מעולה.'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" dir="rtl" id="faq">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>


      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-[30%] right-[10%] w-[700px] h-[700px] bg-gradient-to-tl from-red-500/20 via-primary-500/5 to-transparent rounded-full blur-3xl transform -rotate-45" />
        <div className="absolute -top-[50%] -left-[10%] w-[600px] h-[600px] bg-gradient-to-tl from-red-500/20 via-primary-500/10 to-transparent rounded-full blur-3xl transform rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
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
                שאלות נפוצות
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
              שאלות נפוצות
            </h2>
            <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              מצאו תשובות לשאלות הנפוצות ביותר
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full bg-white dark:bg-[rgb(36,37,37)] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-[rgb(46,47,47)] text-right"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      {faq.question}
                    </span>
                    <span className="text-primary-500 dark:text-primary-400">
                      {openIndex === index ? <FaMinus /> : <FaPlus />}
                    </span>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-600 dark:text-gray-300">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
