'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceDetailProps {
  id: string;
}

const services = {
  'web-development': {
    id: 'web-development',
    title: 'פיתוח אתרים',
    description: 'פיתוח אתרים מותאמים אישית עם טכנולוגיות מתקדמות וחווית משתמש מעולה.',
    fullDescription: `
      אנו מתמחים בפיתוח אתרים מקצועיים המותאמים במיוחד לצרכים הייחודיים של העסק שלכם. הצוות שלנו משלב מומחיות טכנית עם הבנה עמוקה של חווית משתמש כדי ליצור אתרים שלא רק נראים מעולה, אלא גם מניעים תוצאות עסקיות.

      אנו מקפידים על שימוש בטכנולוגיות החדשניות ביותר תוך שמירה על קוד נקי ומתוחזק היטב, מה שמבטיח ביצועים מעולים ותחזוקה פשוטה לאורך זמן.
    `,
    image: 'https://placehold.co/600x400/red/white?text=Web+Development',
    features: [
      'עיצוב מותאם אישית',
      'אופטימיזציה למנועי חיפוש',
      'תמיכה בכל המכשירים',
      'אבטחה מתקדמת'
    ],
    technologies: [
      'React',
      'Next.js',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'MongoDB'
    ],
    process: [
      {
        title: 'אפיון ותכנון',
        description: 'ניתוח צרכים מעמיק ותכנון ארכיטקטורת המערכת'
      },
      {
        title: 'עיצוב',
        description: 'עיצוב ממשק משתמש מודרני ואינטואיטיבי'
      },
      {
        title: 'פיתוח',
        description: 'פיתוח האתר תוך שימוש בטכנולוגיות מתקדמות'
      },
      {
        title: 'בדיקות והשקה',
        description: 'בדיקות מקיפות והשקה מבוקרת של האתר'
      }
    ]
  },
  'mobile-development': {
    id: 'mobile-development',
    title: 'פיתוח אפליקציות',
    description: 'פיתוח אפליקציות מובייל חדשניות לאנדרואיד ו-iOS.',
    fullDescription: `
      אנו מפתחים אפליקציות מובייל מתקדמות שמשלבות טכנולוגיה חדשנית עם חווית משתמש מעולה. הצוות שלנו מתמחה בפיתוח לשתי הפלטפורמות המובילות - iOS ו-Android.

      אנו מקפידים על ביצועים מעולים, עיצוב נקי ומודרני, ותמיכה מתמשכת לאחר ההשקה.
    `,
    image: 'https://placehold.co/600x400/blue/white?text=Mobile+Development',
    features: [
      'ממשק משתמש נוח',
      'ביצועים מהירים',
      'התאמה אישית',
      'תמיכה שוטפת'
    ],
    technologies: [
      'React Native',
      'Swift',
      'Kotlin',
      'Firebase',
      'Node.js',
      'MongoDB'
    ],
    process: [
      {
        title: 'אפיון ותכנון',
        description: 'הגדרת דרישות ותכנון ארכיטקטורת האפליקציה'
      },
      {
        title: 'עיצוב',
        description: 'עיצוב ממשק משתמש מותאם לפלטפורמה'
      },
      {
        title: 'פיתוח',
        description: 'פיתוח האפליקציה לשתי הפלטפורמות'
      },
      {
        title: 'בדיקות והשקה',
        description: 'בדיקות מקיפות והעלאה לחנויות האפליקציות'
      }
    ]
  },
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'שיווק דיגיטלי',
    description: 'אסטרטגיות שיווק דיגיטלי מתקדמות להגדלת החשיפה והמכירות.',
    fullDescription: `
      אנו מספקים שירותי שיווק דיגיטלי מקיפים שיעזרו לעסק שלכם להגיע לקהל היעד הנכון ולהגדיל את המכירות. אנו משתמשים בכלים מתקדמים ואסטרטגיות מוכחות.

      הצוות שלנו מתמחה בקידום ברשתות חברתיות, קידום ממומן, אופטימיזציה למנועי חיפוש וניתוח נתונים מתקדם.
    `,
    image: 'https://placehold.co/600x400/green/white?text=Digital+Marketing',
    features: [
      'קידום ברשתות חברתיות',
      'קידום ממומן',
      'אופטימיזציה לחיפוש',
      'ניתוח נתונים'
    ],
    technologies: [
      'Google Ads',
      'Facebook Ads',
      'Google Analytics',
      'SEMrush',
      'Ahrefs',
      'Mailchimp'
    ],
    process: [
      {
        title: 'מחקר שוק',
        description: 'ניתוח השוק והמתחרים'
      },
      {
        title: 'אסטרטגיה',
        description: 'בניית אסטרטגיית שיווק מותאמת'
      },
      {
        title: 'יישום',
        description: 'הפעלת קמפיינים ואופטימיזציה'
      },
      {
        title: 'מדידה ושיפור',
        description: 'ניתוח תוצאות ושיפור מתמיד'
      }
    ]
  },
  'ecommerce': {
    id: 'ecommerce',
    title: 'חנויות אונליין',
    description: 'הקמת חנויות אונליין מתקדמות עם מערכות תשלום מאובטחות וניהול מלאי.',
    fullDescription: `
      אנו מתמחים בהקמת חנויות אונליין מתקדמות שיעזרו לכם למכור את המוצרים שלכם באופן יעיל ומאובטח. אנו משלבים פלטפורמות מובילות עם התאמות אישיות.

      המערכות שלנו כוללות ניהול מלאי מתקדם, מערכות תשלום מאובטחות, ואינטגרציה עם מערכות לוגיסטיקה ושילוח.
    `,
    image: 'https://placehold.co/600x400/purple/white?text=E-Commerce',
    features: [
      'ממשק ניהול מתקדם',
      'אינטגרציה עם ספקים',
      'מערכות תשלום מאובטחות',
      'ניהול מלאי אוטומטי'
    ],
    technologies: [
      'WooCommerce',
      'Shopify',
      'Magento',
      'Stripe',
      'PayPal',
      'MySQL'
    ],
    process: [
      {
        title: 'אפיון',
        description: 'הגדרת צרכי החנות והמוצרים'
      },
      {
        title: 'הקמה',
        description: 'הקמת החנות והגדרת מערכות'
      },
      {
        title: 'אינטגרציה',
        description: 'חיבור למערכות תשלום ולוגיסטיקה'
      },
      {
        title: 'השקה',
        description: 'בדיקות סליקה והשקת החנות'
      }
    ]
  },
  'ui-ux': {
    id: 'ui-ux',
    title: 'עיצוב ממשק משתמש',
    description: 'עיצוב חווית משתמש מתקדמת ואינטואיטיבית שתגרום ללקוחות שלך להישאר.',
    fullDescription: `
      אנו מתמחים בעיצוב ממשקי משתמש מודרניים ואינטואיטיביים שמשפרים את חווית המשתמש ומגדילים את שיעורי ההמרה. אנו מבצעים מחקר משתמשים מעמיק.

      הצוות שלנו משלב ידע בעיצוב עם הבנה עמוקה של התנהגות משתמשים כדי ליצור ממשקים שעובדים.
    `,
    image: 'https://placehold.co/600x400/orange/white?text=UI+UX+Design',
    features: [
      'עיצוב מודרני ונקי',
      'מחקר משתמשים',
      'אפיון ממשקים',
      'בדיקות שימושיות'
    ],
    technologies: [
      'Figma',
      'Adobe XD',
      'Sketch',
      'InVision',
      'Principle',
      'Zeplin'
    ],
    process: [
      {
        title: 'מחקר',
        description: 'מחקר משתמשים וניתוח צרכים'
      },
      {
        title: 'אפיון',
        description: 'אפיון מסכים וזרימת משתמש'
      },
      {
        title: 'עיצוב',
        description: 'עיצוב ויזואלי ואינטראקציות'
      },
      {
        title: 'בדיקות',
        description: 'בדיקות שימושיות ושיפורים'
      }
    ]
  },
  'consulting': {
    id: 'consulting',
    title: 'ייעוץ טכנולוגי',
    description: 'ייעוץ מקצועי לבחירת הטכנולוגיות והפתרונות המתאימים ביותר לעסק שלך.',
    fullDescription: `
      אנו מספקים ייעוץ טכנולוגי מקצועי שיעזור לכם לבחור את הפתרונות הטכנולוגיים המתאימים ביותר לעסק שלכם. אנו מתמחים בניתוח צרכים עסקיים.

      הצוות שלנו בעל ניסיון רב בתכנון ארכיטקטורה ובחירת טכנולוגיות, ויעזור לכם לקבל את ההחלטות הנכונות.
    `,
    image: 'https://placehold.co/600x400/teal/white?text=Tech+Consulting',
    features: [
      'ניתוח צרכים',
      'בחירת טכנולוגיות',
      'תכנון ארכיטקטורה',
      'ליווי שוטף'
    ],
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Terraform'
    ],
    process: [
      {
        title: 'הערכת מצב',
        description: 'ניתוח המצב הקיים והצרכים'
      },
      {
        title: 'תכנון',
        description: 'תכנון אסטרטגי ובחירת פתרונות'
      },
      {
        title: 'יישום',
        description: 'ליווי ביישום הפתרונות'
      },
      {
        title: 'מעקב',
        description: 'מעקב והתאמות לפי הצורך'
      }
    ]
  }
};

export default function ServiceDetail({ id }: ServiceDetailProps) {
  const service = services[id as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#1e1e1e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            השירות לא נמצא
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            מצטערים, השירות שחיפשת לא נמצא. אנא בדוק את הקישור ונסה שוב.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors duration-200"
          >
            <span>חזרה לרשימת השירותים</span>
            <span className="mr-2 transform rotate-180">→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-white dark:bg-[#1e1e1e]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[40%] -right-[20%] w-[800px] h-[800px] bg-gradient-to-br from-primary-500/20 via-red-500/10 to-transparent rounded-full blur-3xl transform rotate-12" />
        <div className="absolute -bottom-[40%] -left-[20%] w-[800px] h-[800px] bg-gradient-to-tl from-red-500/20 via-primary-500/10 to-transparent rounded-full blur-3xl transform -rotate-12" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-900 dark:from-primary-300 dark:to-primary-500 text-transparent bg-clip-text mb-4"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400"
          >
            {service.description}
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden mb-8">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Features */}
            <div className="bg-gray-50 dark:bg-[#2e2e2e] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                תכונות עיקריות
              </h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="bg-gray-50 dark:bg-[#2e2e2e] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                טכנולוגיות
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {service.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Description */}
            <div className="bg-gray-50 dark:bg-[#2e2e2e] rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                על השירות
              </h3>
              <div className="prose dark:prose-invert">
                {service.fullDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-400 mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="bg-gray-50 dark:bg-[#2e2e2e] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                תהליך העבודה
              </h3>
              <div className="space-y-6">
                {service.process.map((step, idx) => (
                  <div key={idx}>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-20"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors duration-200"
          >
            <span>דברו איתנו על הפרויקט שלכם</span>
            <span className="mr-2 transform rotate-180">→</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
