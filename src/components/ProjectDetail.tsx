'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLink, FaCheck } from 'react-icons/fa';

interface ProjectDetailProps {
  id: string;
}

const projects = {
  'project-1': {
    id: 'project-1',
    title: 'מערכת ניהול מתקדמת',
    description: 'פיתוח מערכת ניהול מתקדמת עבור חברת הייטק מובילה, כולל דשבורדים, ניהול משתמשים, ואנליטיקס בזמן אמת.',
    fullDescription: `
      מערכת הניהול המתקדמת שלנו מהווה פתרון מקיף עבור חברות הייטק המחפשות לייעל את תהליכי העבודה שלהן. המערכת פותחה תוך שימת דגש על חוויית משתמש מעולה, ביצועים מהירים, ואבטחה ברמה הגבוהה ביותר.

      האתגר העיקרי היה ליצור ממשק משתמש אינטואיטיבי שיאפשר ניהול קל ויעיל של מספר רב של משתמשים ופרויקטים, תוך שמירה על ביצועים מהירים גם בעומסים גבוהים.
    `,
    image: 'https://placehold.co/600x400/blue/white?text=Management+System',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    features: [
      'ממשק משתמש מתקדם',
      'ניהול משתמשים מלא',
      'דוחות בזמן אמת',
      'אינטגרציה עם מערכות חיצוניות'
    ],
    results: [
      'שיפור של 50% בזמני הטעינה',
      'הגדלת פרודוקטיביות ב-30%',
      'חיסכון של 25% בעלויות תפעול',
      'שביעות רצון משתמשים של 4.8/5'
    ],
    process: [
      'אפיון מעמיק של דרישות הלקוח',
      'עיצוב ממשק משתמש מותאם אישית',
      'פיתוח והטמעה של המערכת',
      'בדיקות מקיפות ואופטימיזציה',
      'הדרכת צוות והטמעה מלאה'
    ],
    demoLink: 'https://demo.project1.com',
    githubLink: 'https://github.com/project1',
    clientName: 'TechCorp Solutions',
    duration: '6 חודשים',
    team: '5 מפתחים, 2 מעצבים, מנהל פרויקט'
  },
  'project-2': {
    id: 'project-2',
    title: 'אפליקציית מסחר',
    description: 'אפליקציית מסחר מתקדמת עם תמיכה במגוון מטבעות, גרפים בזמן אמת, והתראות מותאמות אישית.',
    fullDescription: `
      אפליקציית המסחר שפיתחנו מספקת חווית מסחר מתקדמת ואינטואיטיבית למשקיעים מקצועיים וחובבים כאחד. האפליקציה משלבת טכנולוגיות מתקדמות לניתוח שוק בזמן אמת עם ממשק משתמש נוח ונגיש.

      הפרויקט כלל פיתוח מערכת מורכבת לניהול עסקאות בזמן אמת, מערכת התראות חכמה, וכלי ניתוח מתקדמים.
    `,
    image: 'https://placehold.co/600x400/purple/white?text=Trading+App',
    technologies: ['Flutter', 'Firebase', 'GraphQL', 'WebSocket'],
    features: [
      'מסחר בזמן אמת',
      'גרפים מתקדמים',
      'התראות מותאמות אישית',
      'אבטחה מתקדמת'
    ],
    results: [
      'גידול של 200% במספר המשתמשים',
      'זמן תגובה ממוצע של 100ms',
      'דירוג 4.9 בחנות האפליקציות',
      '99.99% זמינות מערכת'
    ],
    process: [
      'מחקר שוק מקיף',
      'אפיון חווית משתמש',
      'פיתוח ובדיקות',
      'השקה הדרגתית',
      'איסוף משוב ושיפור מתמיד'
    ],
    demoLink: 'https://demo.project2.com',
    githubLink: 'https://github.com/project2',
    clientName: 'Trade Pro Ltd',
    duration: '8 חודשים',
    team: '4 מפתחים, מעצב UX, מומחה אבטחה'
  },
  'project-3': {
    id: 'project-3',
    title: 'פלטפורמת למידה',
    description: 'פלטפורמת למידה מקוונת עם תמיכה בקורסים מקוונים, בחינות, ומעקב התקדמות.',
    fullDescription: `
      פלטפורמת הלמידה שפיתחנו מאפשרת למוסדות חינוך ומדריכים עצמאיים להעביר קורסים מקוונים באופן אפקטיבי ומעניין. המערכת כוללת כלים מתקדמים לניהול תוכן, מעקב אחר התקדמות התלמידים, ויצירת חווית למידה אינטראקטיבית.

      הפרויקט התמקד ביצירת ממשק משתמש נגיש ואינטואיטיבי, תוך שילוב כלים פדגוגיים מתקדמים ותמיכה בתכנים מולטימדיה.
    `,
    image: 'https://placehold.co/600x400/green/white?text=Learning+Platform',
    technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
    features: [
      'ניהול קורסים',
      'מערכת בחינות',
      'צ\'אט בזמן אמת',
      'אנליטיקס מתקדם'
    ],
    results: [
      'למעלה מ-10,000 תלמידים פעילים',
      'שיעור השלמת קורסים של 85%',
      'ציון שביעות רצון ממוצע 4.7/5',
      'חיסכון של 40% בעלויות הדרכה'
    ],
    process: [
      'ניתוח צרכים פדגוגיים',
      'עיצוב חווית למידה',
      'פיתוח פלטפורמה',
      'בדיקות משתמשים',
      'השקה והדרכת צוות'
    ],
    demoLink: 'https://demo.project3.com',
    githubLink: 'https://github.com/project3',
    clientName: 'EduTech Academy',
    duration: '12 חודשים',
    team: '6 מפתחים, 2 מעצבי UX, מומחה פדגוגי'
  },
  'project-4': {
    id: 'project-4',
    title: 'מערכת IoT',
    description: 'מערכת IoT לניטור וניהול מכשירים חכמים, כולל דשבורד לניהול והתראות בזמן אמת.',
    fullDescription: `
      מערכת ה-IoT המתקדמת שפיתחנו מאפשרת ניטור וניהול של אלפי מכשירים חכמים בזמן אמת. המערכת כוללת דשבורד מתקדם המציג נתונים בזמן אמת, מערכת התראות חכמה, ויכולות אוטומציה מתקדמות.

      האתגר המרכזי היה בפיתוח מערכת שתוכל לטפל בכמות עצומה של נתונים בזמן אמת, תוך שמירה על ביצועים מהירים ואמינות גבוהה.
    `,
    image: 'https://placehold.co/600x400/orange/white?text=IoT+System',
    technologies: ['Vue.js', 'Python', 'MQTT', 'InfluxDB', 'Kubernetes'],
    features: [
      'ניטור בזמן אמת',
      'התראות חכמות',
      'אוטומציה מתקדמת',
      'ניתוח נתונים מתקדם',
      'ממשק ניהול מרכזי'
    ],
    results: [
      'ניהול של מעל 50,000 מכשירים',
      'חיסכון של 60% בעלויות תפעול',
      'זמן תגובה ממוצע של 50ms',
      'אמינות מערכת של 99.99%'
    ],
    process: [
      'אפיון ארכיטקטורה',
      'פיתוח תשתיות',
      'פיתוח ממשק משתמש',
      'אינטגרציה עם מכשירים',
      'בדיקות עומסים',
      'השקה מדורגת'
    ],
    demoLink: 'https://demo.project4.com',
    githubLink: 'https://github.com/project4',
    clientName: 'Smart Systems Ltd',
    duration: '18 חודשים',
    team: '8 מפתחים, מומחה IoT, מעצב UX, מנהל פרויקט'
  },
  'project-5': {
    id: 'project-5',
    title: 'אפליקציית בריאות',
    description: 'אפליקציית בריאות לניהול אורח חיים בריא, מעקב אחר פעילות גופנית ותזונה.',
    fullDescription: `
      אפליקציית הבריאות שפיתחנו מסייעת למשתמשים לנהל אורח חיים בריא באמצעות מעקב אחר פעילות גופנית, תזונה, ומדדי בריאות שונים. האפליקציה משלבת טכנולוגיות מתקדמות עם ממשק משתמש ידידותי ואינטואיטיבי.

      הפרויקט התמקד ביצירת חווית משתמש מותאמת אישית, אינטגרציה עם מכשירי כושר חכמים, ומתן המלצות מבוססות נתונים.
    `,
    image: 'https://placehold.co/600x400/yellow/white?text=Health+App',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'TensorFlow'],
    features: [
      'מעקב פעילות גופנית',
      'תכנון תזונה',
      'מעקב מדדי בריאות',
      'המלצות מותאמות אישית',
      'שילוב עם מכשירים חכמים'
    ],
    results: [
      'מעל 100,000 הורדות',
      'דירוג 4.8 בחנות האפליקציות',
      'שיעור שימור משתמשים של 75%',
      'שיפור של 45% במדדי בריאות'
    ],
    process: [
      'מחקר משתמשים',
      'אפיון UX/UI',
      'פיתוח אלגוריתמים',
      'בדיקות משתמשים',
      'השקה הדרגתית',
      'איסוף משוב ושיפור'
    ],
    demoLink: 'https://demo.project5.com',
    githubLink: 'https://github.com/project5',
    clientName: 'HealthTech Solutions',
    duration: '10 חודשים',
    team: '5 מפתחים, מומחה בריאות, מעצב UX, מנהל מוצר'
  },
  'project-6': {
    id: 'project-6',
    title: 'פלטפורמת תוכן',
    description: 'פלטפורמת תוכן מתקדמת עם תמיכה במגוון סוגי מדיה, ניהול משתמשים, ואנליטיקס.',
    fullDescription: `
      פלטפורמת התוכן המתקדמת שפיתחנו מאפשרת ליוצרי תוכן לנהל, להפיץ ולמנף את התוכן שלהם באופן אפקטיבי. המערכת תומכת במגוון רחב של סוגי מדיה, כולל וידאו, אודיו, תמונות וטקסט.

      הפרויקט כלל פיתוח מערכת ניהול תוכן מתקדמת, מנוע חיפוש חכם, ומערכת אנליטיקס מקיפה לניתוח התנהגות משתמשים וביצועי תוכן.
    `,
    image: 'https://placehold.co/600x400/red/white?text=Content+Platform',
    technologies: ['Angular', 'Django', 'PostgreSQL', 'Elasticsearch', 'AWS'],
    features: [
      'ניהול תוכן מתקדם',
      'תמיכה במגוון סוגי מדיה',
      'מנוע חיפוש חכם',
      'אנליטיקס מתקדם',
      'אופטימיזציה אוטומטית'
    ],
    results: [
      'מעל מיליון פריטי תוכן',
      'זמן טעינה ממוצע של 2 שניות',
      'גידול של 300% בצריכת תוכן',
      'חיסכון של 50% בעלויות תפעול'
    ],
    process: [
      'אפיון דרישות מערכת',
      'תכנון ארכיטקטורה',
      'פיתוח תשתיות',
      'פיתוח ממשק ניהול',
      'אופטימיזציה וכוונון',
      'הדרכה והטמעה'
    ],
    demoLink: 'https://demo.project6.com',
    githubLink: 'https://github.com/project6',
    clientName: 'Media Corp',
    duration: '15 חודשים',
    team: '7 מפתחים, מומחה SEO, 2 מעצבי UX, מנהל מוצר'
  }
};

export default function ProjectDetail({ id }: ProjectDetailProps) {
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#1e1e1e] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            הפרויקט לא נמצא
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            מצטערים, הפרויקט שחיפשת לא נמצא. אנא בדוק את הקישור ונסה שוב.
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-colors"
          >
            <span>חזרה לרשימת הפרויקטים</span>
            <span className="mr-2 transform rotate-180">→</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#1e1e1e] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Project Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="relative h-[400px] mb-12 rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Left Column */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                על הפרויקט
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="whitespace-pre-wrap">{project.fullDescription}</p>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  טכנולוגיות
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-8 flex gap-4">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <FaLink className="mr-2" />
                    צפה בדמו
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </a>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  תכונות עיקריות
                </h3>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start"
                    >
                      <FaCheck className="mt-1 mr-2 text-primary-600" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  תוצאות
                </h3>
                <ul className="space-y-3">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start"
                    >
                      <FaCheck className="mt-1 mr-2 text-primary-600" />
                      <span className="text-gray-700 dark:text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  תהליך העבודה
                </h3>
                <div className="space-y-4">
                  {project.process.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-start"
                    >
                      <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full bg-primary-600 text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <span className="mr-3 text-gray-700 dark:text-gray-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">לקוח</h4>
              <p className="mt-2 text-gray-900 dark:text-white">{project.clientName}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">משך הפרויקט</h4>
              <p className="mt-2 text-gray-900 dark:text-white">{project.duration}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">צוות</h4>
              <p className="mt-2 text-gray-900 dark:text-white">{project.team}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
