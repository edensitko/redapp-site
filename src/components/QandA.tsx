import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaArrowLeft } from 'react-icons/fa';

interface FAQItem {
  question: string;
  answer: string;
  links?: { url: string; text: string }[];
  id: number;
}

const faqs: FAQItem[] = [
  {
    question: "אילו שירותים טכנולוגיים RED מספקת?",
    answer: "RED מציעה מגוון רחב של שירותי פיתוח טכנולוגיים, כולל: פיתוח אפליקציות מותאמות אישית, בניית אתרים מתקדמים, פתרונות e-commerce, פיתוח מערכות ניהול תוכן (CMS), אינטגרציות API, ופתרונות ענן. אנו מתמחים בטכנולוגיות החדישות ביותר תוך שימת דגש על חדשנות וביצועים מעולים.",
    id: 1,
    links: [
      { text: "צפו בפרויקטים שלנו", url: "/projects" },
      { text: "שירותים נוספים", url: "/services" }
    ]
  },
  {
    question: "כמה זמן לוקח לפתח אפליקציה או אתר?",
    answer: "משך הפיתוח משתנה בהתאם למורכבות הפרויקט. אתרים בסיסיים יכולים להיות מוכנים תוך 4-6 שבועות, בעוד שאפליקציות מורכבות עשויות להימשך 3-6 חודשים. אנו עובדים בשיטת Agile ומספקים עדכונים שוטפים ושחרורים הדרגתיים לאורך כל תהליך הפיתוח.",
    id: 2
  },
  {
    question: "באילו טכנולוגיות אתם משתמשים?",
    answer: "אנו עובדים עם מגוון טכנולוגיות מתקדמות כולל React, React Native, Node.js, Python, TypeScript, AWS, ו-Firebase. הבחירה בטכנולוגיה נעשית בהתאם לצרכי הפרויקט, תוך התחשבות בגורמים כמו ביצועים, סקלביליות, ותחזוקה לטווח ארוך.",
    id: 3,
    links: [
      { text: "המומחיות הטכנולוגית שלנו", url: "/tech-stack" }
    ]
  },
  {
    question: "מה כולל תהליך הפיתוח שלכם?",
    answer: "תהליך הפיתוח שלנו כולל: אפיון מעמיק של הדרישות, תכנון ארכיטקטורה, עיצוב UI/UX, פיתוח, בדיקות איכות, והטמעה. אנו מספקים ליווי צמוד לאורך כל הדרך, כולל תמיכה טכנית ותחזוקה שוטפת לאחר ההשקה.",
    id: 4
  },
  {
    question: "איך מתחילים פרויקט עם RED?",
    answer: "התהליך מתחיל בפגישת ייעוץ טכנולוגית בה נבין את הצרכים והמטרות שלכם. לאחר מכן, נגבש הצעה מפורטת הכוללת אפיון טכני, לוחות זמנים ותקציב. ברגע שנגיע להסכמה, נתחיל בתהליך האפיון המפורט והפיתוח.",
    id: 5,
    links: [
      { text: "קביעת פגישת ייעוץ", url: "/contact" }
    ]
  },
  {
    question: "האם אתם מספקים תמיכה לאחר ההשקה?",
    answer: "כן, אנו מציעים חבילות תמיכה ותחזוקה מקיפות הכוללות: ניטור ביצועים, עדכוני אבטחה, גיבויים, תיקון באגים, ושדרוגים. הצוות שלנו זמין 24/7 לטיפול בכל בעיה טכנית שעולה.",
    id: 6
  },
  {
    question: "האם אתם מפתחים גם לסטארטאפים?",
    answer: "בהחלט! יש לנו ניסיון רב בעבודה עם סטארטאפים, החל מפיתוח MVP ועד למוצר מלא. אנו מבינים את הצורך בגמישות ומהירות, ומציעים פתרונות מותאמים לתקציב ולצרכים המשתנים של סטארטאפים.",
    id: 7
  },
  {
    question: "מה מייחד את RED מחברות פיתוח אחרות?",
    answer: "המומחיות שלנו משלבת ידע טכנולוגי מעמיק עם הבנה עסקית. אנו מתמקדים לא רק בפיתוח, אלא גם באופטימיזציה לחוויית משתמש מעולה וביצועים גבוהים. בנוסף, אנו מציעים שירות אישי, זמינות גבוהה, ומחויבות מלאה להצלחת הפרויקט.",
    id: 8,
    links: [
      { text: "קראו עוד על הגישה שלנו", url: "/about" }
    ]
  },
  {
    question: "האם אתם מספקים שירותי UI/UX?",
    answer: "כן, יש לנו צוות מעצבי UI/UX מנוסה המתמחה בעיצוב ממשקים אינטואיטיביים ומודרניים. אנו מבצעים מחקר משתמשים, בונים פרוטוטייפים, ומתכננים חוויות משתמש מותאמות אישית שמשפרות את המעורבות והקונברסיה.",
    id: 9,
    links: [
      { text: "צפו בתיק העבודות שלנו", url: "/portfolio" }
    ]
  },
  {
    question: "איך אתם מבטיחים את איכות הקוד?",
    answer: "אנו מקפידים על סטנדרטים גבוהים של פיתוח, כולל: בדיקות אוטומטיות, code reviews, CI/CD, ותיעוד מקיף. הקוד שלנו נכתב באופן מודולרי ונקי, מה שמאפשר תחזוקה קלה ושדרוגים עתידיים.",
    id: 10,
    links: [
      { text: "תהליכי האיכות שלנו", url: "/quality" }
    ]
  }
];

const QandA: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative w-full py-24 overflow-hidden" dir="rtl">
      {/* Morphism Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-6 py-2 mb-6 rounded-full 
                     bg-white/40 backdrop-blur-sm
                     border border-white/60 shadow-sm"
          >
            <span className="text-lg font-medium bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              שאלות נפוצות
            </span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900">
            התשובות לשאלות הנפוצות ביותר
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            כל מה שרציתם לדעת
            <span className="text-red-500 font-medium mx-1">
              במקום אחד
            </span>
          </p>
        </div>

        {/* Q&A Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden
                           bg-gradient-to-br from-white/80 via-white/70 to-white/60
                           backdrop-blur-md
                           border border-white/60
                           shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]
                           hover:shadow-[0_15px_30px_-8px_rgba(239,68,68,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)]
                           hover:from-white/90 hover:via-white/80 hover:to-white/70
                           group-hover:border-red-100/60
                           transition-all duration-500
                           before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-red-500/5 before:opacity-0 before:transition-opacity before:duration-500
                           group-hover:before:opacity-100">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-right p-6 flex items-center justify-between"
                >
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-red-500 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 flex items-center justify-center
                               bg-gradient-to-br from-white/90 via-white/80 to-white/70
                               backdrop-blur-sm
                               rounded-full border border-white/60
                               group-hover:border-red-200/60
                               shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]
                               group-hover:shadow-[0_8px_16px_-6px_rgba(239,68,68,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)]
                               transition-all duration-500">
                    <span className="text-red-500/70 font-medium transform transition-transform duration-300"
                          style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {faq.answer}
                    </p>
                    {faq.links && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {faq.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm
                                   bg-gradient-to-br from-white/90 via-white/80 to-white/70
                                   backdrop-blur-sm text-red-500
                                   border border-white/60
                                   group-hover:border-red-200/60
                                   shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]
                                   hover:shadow-[0_8px_16px_-6px_rgba(239,68,68,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)]
                                   hover:bg-red-50/80
                                   transition-all duration-500"
                          >
                            <FaArrowLeft className="text-xs" />
                            {link.text}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-2xl mx-auto text-center p-8 rounded-2xl
                   bg-gradient-to-br from-white/80 via-white/70 to-white/60
                   backdrop-blur-md
                   border border-white/60
                   shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]
                   hover:shadow-[0_15px_30px_-8px_rgba(239,68,68,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)]
                   hover:from-white/90 hover:via-white/80 hover:to-white/70
                   transition-all duration-500
                   before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-red-500/5 before:opacity-0 before:transition-opacity before:duration-500
                   hover:before:opacity-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            לא מצאתם את התשובה שחיפשתם?
          </h3>
          <p className="text-gray-600 mb-8">
            אנחנו כאן בשבילכם
            <span className="block text-red-500 font-medium mt-1">
              נשמח לענות על כל שאלה
            </span>
          </p>
          <motion.a
            href="/contact"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-base font-medium
                   bg-gradient-to-r from-red-500 to-red-600
                   text-white
                   shadow-[0_8px_16px_-6px_rgba(239,68,68,0.5)]
                   hover:shadow-[0_12px_20px_-4px_rgba(239,68,68,0.6)]
                   transition-all duration-300"
          >
            צרו קשר
            <FaArrowLeft className="text-sm" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default QandA;
