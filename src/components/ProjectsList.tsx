'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaGithub, FaLink } from 'react-icons/fa';

const projects = [
  {
    id: 'project-1',
    title: 'מערכת ניהול מתקדמת',
    description: 'פיתוח מערכת ניהול מתקדמת עבור חברת הייטק מובילה, כולל דשבורדים, ניהול משתמשים, ואנליטיקס בזמן אמת.',
    image: 'https://placehold.co/600x400/blue/white?text=Management+System',
    technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    features: [
      'ממשק משתמש מתקדם',
      'ניהול משתמשים מלא',
      'דוחות בזמן אמת',
      'אינטגרציה עם מערכות חיצוניות'
    ],
    demoLink: 'https://demo.project1.com',
    githubLink: 'https://github.com/project1'
  },
  {
    id: 'project-2',
    title: 'אפליקציית מסחר',
    description: 'אפליקציית מסחר מתקדמת עם תמיכה במגוון מטבעות, גרפים בזמן אמת, והתראות מותאמות אישית.',
    image: 'https://placehold.co/600x400/purple/white?text=Trading+App',
    technologies: ['Flutter', 'Firebase', 'GraphQL', 'WebSocket'],
    features: [
      'מסחר בזמן אמת',
      'גרפים מתקדמים',
      'התראות מותאמות אישית',
      'אבטחה מתקדמת'
    ],
    demoLink: 'https://demo.project2.com',
    githubLink: 'https://github.com/project2'
  },
  {
    id: 'project-3',
    title: 'פלטפורמת למידה',
    description: 'פלטפורמת למידה מקוונת עם תמיכה בקורסים מקוונים, בחינות, ומעקב התקדמות.',
    image: 'https://placehold.co/600x400/green/white?text=Learning+Platform',
    technologies: ['Next.js', 'PostgreSQL', 'Redis', 'AWS'],
    features: [
      'ניהול קורסים',
      'מערכת בחינות',
      'צ\'אט בזמן אמת',
      'אנליטיקס מתקדם'
    ],
    demoLink: 'https://demo.project3.com',
    githubLink: 'https://github.com/project3'
  },
  {
    id: 'project-4',
    title: 'מערכת IoT',
    description: 'מערכת IoT לניטור וניהול מכשירים חכמים, כולל דשבורד לניהול והתראות בזמן אמת.',
    image: 'https://placehold.co/600x400/orange/white?text=IoT+System',
    technologies: ['Vue.js', 'Python', 'MQTT', 'InfluxDB'],
    features: [
      'ניטור בזמן אמת',
      'ניהול מכשירים',
      'התראות חכמות',
      'אוטומציה מתקדמת'
    ],
    demoLink: 'https://demo.project4.com',
    githubLink: 'https://github.com/project4'
  },
  {
    id: 'project-5',
    title: 'אפליקציית בריאות',
    description: 'אפליקציית בריאות לניהול אורח חיים בריא, מעקב אחר פעילות גופנית ותזונה.',
    image: 'https://placehold.co/600x400/yellow/white?text=Health+App',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
    features: [
      'מעקב פעילות גופנית',
      'תכנון תזונה',
      'התראות מותאמות',
      'שיתוף נתונים'
    ],
    demoLink: 'https://demo.project5.com',
    githubLink: 'https://github.com/project5'
  },
  {
    id: 'project-6',
    title: 'פלטפורמת תוכן',
    description: 'פלטפורמת תוכן מתקדמת עם תמיכה במגוון סוגי מדיה, ניהול משתמשים, ואנליטיקס.',
    image: 'https://placehold.co/600x400/red/white?text=Content+Platform',
    technologies: ['Angular', 'Django', 'PostgreSQL', 'Elasticsearch'],
    features: [
      'ניהול תוכן מתקדם',
      'חיפוש חכם',
      'אנליטיקס מפורט',
      'אופטימיזציה לביצועים'
    ],
    demoLink: 'https://demo.project6.com',
    githubLink: 'https://github.com/project6'
  }
];

export default function ProjectsList() {
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
              פרויקטים
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            הפרויקטים שלנו
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            צפו בפרויקטים האחרונים שפיתחנו עבור לקוחותינו
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              <Link href={`/projects/${project.id}`}>
                <div className="h-full bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-sm bg-gray-100/80 dark:bg-gray-700/80 
                                   text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 text-sm bg-gray-50/80 dark:bg-gray-800/80 
                                   text-gray-600 dark:text-gray-400 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaGithub size={20} />
                        </a>
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaLink size={20} />
                        </a>
                      </div>
                      <div className="flex items-center text-red-500 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors duration-200">
                        <span className="ml-2">קרא עוד</span>
                        <FaArrowRight className="transform rotate-180" />
                      </div>
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
