import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaStar, FaLinkedin, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'דניאל כהן',
    role: 'מנכ"ל TechFlow',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60',
    content: 'שיתוף הפעולה עם RED היה מדהים. הצוות המקצועי שלהם עזר לנו להפוך את החזון שלנו למציאות עם פתרון דיגיטלי מושלם.',
    rating: 5,
    linkedin: 'https://linkedin.com',
    project: 'פיתוח אפליקציה',
  },
  {
    id: 2,
    name: 'מיכל לוי',
    role: 'סמנכ"לית שיווק HealthTech',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60',
    content: 'התוצאות שקיבלנו מהשירותים של RED עלו על כל הציפיות. האתר החדש שלנו לא רק נראה מדהים, אלא גם הביא לעלייה משמעותית בהמרות.',
    rating: 5,
    linkedin: 'https://linkedin.com',
    project: 'עיצוב ופיתוח אתר',
  },
  {
    id: 3,
    name: 'אלון ברק',
    role: 'מייסד StartupPro',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60',
    content: 'הבוט שRED פיתחו עבורנו שינה את כל מערך שירות הלקוחות שלנו. החיסכון בזמן ובמשאבים הוא עצום, והלקוחות מרוצים יותר.',
    rating: 5,
    linkedin: 'https://linkedin.com',
    project: 'פיתוח בוט AI',
  },
  {
    id: 4,
    name: 'שירה גולן',
    role: 'מנהלת תפעול FoodTech',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
    content: 'המערכת האוטומטית שRED פיתחו עבורנו חסכה לנו שעות רבות של עבודה ידנית. היכולת שלהם להבין את הצרכים שלנו ולתרגם אותם לפתרון טכנולוגי היא יוצאת דופן.',
    rating: 5,
    linkedin: 'https://linkedin.com',
    project: 'אוטומציה של תהליכים',
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials-section" className="relative w-full py-24 overflow-hidden" dir="rtl">
      {/* Morphism Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -bottom-[40%] right-[20%] w-[800px] h-[800px] bg-gradient-to-br from-primary-500/20 via-red-500/10 to-transparent rounded-full blur-3xl transform rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
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
            <span className="text-lg font-medium bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              המלצות
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            מה הלקוחות אומרים
          </h2>
          <div className="w-1/3 h-1.5 bg-gradient-to-r from-primary-700 to-primary-300 rounded-full mx-auto mb-2" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            הסיפורים של הלקוחות שלנו
            <span className="text-primary-500 font-medium mx-1">
              ההצלחה שלהם היא ההצלחה שלנו
            </span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative p-8 rounded-2xl
                           bg-gradient-to-br from-gray-50/90 via-gray-50/80 to-gray-50/70 dark:from-gray-800/90 dark:via-gray-800/80 dark:to-gray-800/70
                           backdrop-blur-sm border border-white/60 
                           group-hover:border-primary-100/60
                           shadow-lg hover:shadow-xl transition-all duration-300
                           before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-primary-500/5 before:opacity-0 before:transition-opacity before:duration-500
                           before:group-hover:opacity-100">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center
                             bg-gradient-to-br from-white/90 via-white/80 to-white/70
                             backdrop-blur-sm
                             rounded-full border border-white/60
                             group-hover:border-primary-200/60
                             shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]
                             group-hover:shadow-[0_8px_16px_-6px_rgba(239,68,68,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)]
                             transition-all duration-500">
                  <FaQuoteRight className="text-primary-500/70 text-lg group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Project Tag */}
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-sm 
                             bg-gradient-to-br from-white/90 via-white/80 to-white/70
                             backdrop-blur-sm text-primary-500
                             border border-white/60
                             group-hover:border-primary-200/60
                             shadow-sm hover:shadow-md transition-all duration-300
                             group-hover:bg-primary-50/80
                             transition-all duration-500">
                  {testimonial.project}
                </div>

                {/* Content */}
                <div className="relative mt-12 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full 
                                bg-gradient-to-br from-white/90 via-white/80 to-white/70
                                border-2 border-white/60 group-hover:border-primary-200/60 
                                shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]
                                group-hover:shadow-[0_8px_16px_-6px_rgba(239,68,68,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)]
                                transition-all duration-500
                                overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="mr-4 flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                  <div className="relative">
                    <a
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10
                             bg-gradient-to-br from-white/90 via-white/80 to-white/70
                             backdrop-blur-sm
                             rounded-full border border-white/60
                             group-hover:border-primary-200/60
                             shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]
                             group-hover:shadow-[0_8px_16px_-6px_rgba(239,68,68,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)]
                             transition-all duration-500"
                    >
                      <FaLinkedin className="text-primary-500/70 text-lg group-hover:scale-110 transition-transform duration-500" />
                    </a>
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-4 py-1.5
                             bg-gradient-to-br from-white/90 via-white/80 to-white/70
                             backdrop-blur-sm
                             rounded-full border border-white/60
                             group-hover:border-primary-200/60
                             shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]
                             group-hover:shadow-[0_8px_16px_-6px_rgba(239,68,68,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)]
                             transition-all duration-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm drop-shadow-sm" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
