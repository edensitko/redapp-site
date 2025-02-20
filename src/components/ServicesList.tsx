'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa';

const services = [
  {
    id: 'web-development',
    title: 'פיתוח אתרים',
    description: 'פיתוח אתרים מותאמים אישית עם טכנולוגיות מתקדמות וחווית משתמש מעולה.',
    image: 'https://placehold.co/600x400/red/white?text=Web+Development',
    features: [
      'עיצוב מותאם אישית',
      'אופטימיזציה למנועי חיפוש',
      'תמיכה בכל המכשירים',
      'אבטחה מתקדמת'
    ]
  },
  {
    id: 'mobile-development',
    title: 'פיתוח אפליקציות',
    description: 'פיתוח אפליקציות מובייל חדשניות לאנדרואיד ו-iOS.',
    image: 'https://placehold.co/600x400/blue/white?text=Mobile+Development',
    features: [
      'ממשק משתמש נוח',
      'ביצועים מהירים',
      'התאמה אישית',
      'תמיכה שוטפת'
    ]
  },
  {
    id: 'digital-marketing',
    title: 'שיווק דיגיטלי',
    description: 'אסטרטגיות שיווק דיגיטלי מתקדמות להגדלת החשיפה והמכירות.',
    image: 'https://placehold.co/600x400/green/white?text=Digital+Marketing',
    features: [
      'קידום ברשתות חברתיות',
      'קידום ממומן',
      'אופטימיזציה לחיפוש',
      'ניתוח נתונים'
    ]
  },
  {
    id: 'ecommerce',
    title: 'חנויות אונליין',
    description: 'הקמת חנויות אונליין מתקדמות עם מערכות תשלום מאובטחות וניהול מלאי.',
    image: 'https://placehold.co/600x400/purple/white?text=E-Commerce',
    features: [
      'ממשק ניהול מתקדם',
      'אינטגרציה עם ספקים',
      'מערכות תשלום מאובטחות',
      'ניהול מלאי אוטומטי'
    ]
  },
  {
    id: 'ui-ux',
    title: 'עיצוב ממשק משתמש',
    description: 'עיצוב חווית משתמש מתקדמת ואינטואיטיבית שתגרום ללקוחות שלך להישאר.',
    image: 'https://placehold.co/600x400/orange/white?text=UI+UX+Design',
    features: [
      'עיצוב מודרני ונקי',
      'מחקר משתמשים',
      'אפיון ממשקים',
      'בדיקות שימושיות'
    ]
  },
  {
    id: 'consulting',
    title: 'ייעוץ טכנולוגי',
    description: 'ייעוץ מקצועי לבחירת הטכנולוגיות והפתרונות המתאימים ביותר לעסק שלך.',
    image: 'https://placehold.co/600x400/teal/white?text=Tech+Consulting',
    features: [
      'ניתוח צרכים',
      'בחירת טכנולוגיות',
      'תכנון ארכיטקטורה',
      'ליווי שוטף'
    ]
  }
];

export default function ServicesList() {
  return (
    <section className="relative py-40 overflow-hidden" dir="rtl">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] left-[20%] w-[800px] h-[800px] bg-gradient-to-br from-primary-500/20 via-red-500/10 to-transparent rounded-full blur-3xl transform rotate-12" />
        <div className="absolute -bottom-[40%] right-[20%] w-[800px] h-[800px] bg-gradient-to-tl from-red-500/20 via-primary-500/10 to-transparent rounded-full blur-3xl transform -rotate-12" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="text-center mb-16"
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
              שירותים
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            השירותים שלנו
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            פתרונות דיגיטליים מקצה לקצה לעסק שלך
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              <Link href={`/services/${service.id}`} className="block flex-1">
                <div className="h-full bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-sm bg-gray-100/80 dark:bg-gray-700/80 
                                   text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-16"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors duration-200"
          >
            דברו איתנו על הפרויקט שלכם
            <FaArrowLeft className="mr-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
