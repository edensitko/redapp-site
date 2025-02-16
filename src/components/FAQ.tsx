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
    <section className="py-20 bg-white dark:bg-gray-900" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            שאלות נפוצות
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            מצאו תשובות לשאלות הנפוצות ביותר על השירותים שלנו
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
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-right bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg p-4 transition-colors duration-200"
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
    </section>
  );
};

export default FAQ;
