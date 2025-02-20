import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { textStyles, animationVariants } from '../styles/design-system';
import Image from 'next/image';
import ScrollCircle from './ScrollCircle';

const projects = [
  {
    title: 'פלטפורמת מסחר אלקטרוני',
    description: 'פלטפורמת מסחר מודרנית שנבנתה עם React ו-Node.js, כוללת ניהול מלאי בזמן אמת ועיבוד תשלומים מאובטח.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    category: 'web'
  },
  {
    title: 'אפליקציית בריאות',
    description: 'מערכת ניהול בריאות מקיפה המסייעת למרפאות ובתי חולים לייעל את פעילותם.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60',
    tags: ['React Native', 'Firebase', 'TypeScript'],
    link: '#',
    category: 'mobile'
  },
  {
    title: 'ניתוח נתונים מבוסס AI',
    description: 'לוח מחוונים אנליטי המשתמש בלמידת מכונה כדי לספק תובנות ותחזיות למדדים עסקיים.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    tags: ['Python', 'TensorFlow', 'React', 'AWS'],
    link: '#',
    category: 'data'
  },
  {
    title: 'מערכת בית חכם',
    description: 'מערכת אוטומציה לבית חכם מבוססת IoT עם שליטה קולית ותכונות אופטימיזציה של אנרגיה.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60',
    tags: ['IoT', 'Python', 'React', 'AWS IoT'],
    link: '#',
    category: 'iot'
  },
  {
    title: 'פלטפורמת מדיה חברתית',
    description: 'פלטפורמת רשת חברתית מודרנית עם יכולות הודעות מיידיות ושיתוף תוכן בזמן אמת.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&auto=format&fit=crop&q=60',
    tags: ['React', 'Node.js', 'Socket.io', 'Redis'],
    link: '#',
    category: 'web'
  },
  {
    title: 'פתרון פינטק',
    description: 'פלטפורמת טכנולוגיה פיננסית מאובטחת לתשלומים דיגיטליים ועסקאות מטבע קריפטוגרפי.',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&auto=format&fit=crop&q=60',
    tags: ['Blockchain', 'Node.js', 'React', 'PostgreSQL'],
    link: '#',
    category: 'fintech'
  }
];

const categories = ['הכל', 'web', 'mobile', 'data', 'iot', 'fintech'];

const Projects: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.2, 1.4]);

  const [selectedCategory, setSelectedCategory] = useState('הכל');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(
    project => selectedCategory === 'הכל' || project.category === selectedCategory
  );

  return (
    <section className="relative overflow-hidden" dir="rtl" id="projects">
      {/* Video Background with Parallax */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <motion.div 
          style={{ 
            y: videoY,
            scale: videoScale,
          }}
          className="absolute top-0 left-0 w-full h-[400px]"
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-fill"
            style={{ rotate: '180deg' }}
          >
            <source src="/videos/par.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80 dark:from-[#1e1e1e]/80 dark:via-[#1e1e1e]/40 dark:to-[#1e1e1e]/80" />
        </motion.div>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-gradient-to-r from-primary-500/20 via-red-500/10 to-transparent rounded-full blur-3xl transform rotate-45" />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-gradient-to-l from-red-500/20 via-primary-500/10 to-transparent rounded-full blur-3xl transform -rotate-45" />
      </div>

      <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          style={{ scale, opacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
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
                פרויקטים
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
              הפרויקטים שלנו
            </h2>
            <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              פרויקטים נבחרים שמדגימים את היכולות שלנו
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-16 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCategory === category
                    ? 'bg-gradient-to-br from-white/90 via-white/80 to-white/70 shadow-[0_8px_16px_-6px_rgba(239,68,68,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)] text-red-500 border border-red-200'
                    : 'bg-gradient-to-br from-white/70 via-white/60 to-white/50 text-gray-600 hover:text-red-500 border border-white/60 hover:border-red-200 hover:from-white/80 hover:via-white/70 hover:to-white/60 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.6)]'
                  }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300">
                    <div className="relative aspect-video">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="text-sm font-medium text-primary-500 dark:text-primary-400 mb-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-block px-3 py-1 mr-2 mb-2 text-sm font-medium 
                                   bg-primary-50 text-primary-500 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-500 font-medium group"
                      >
                        <span className="ml-2">לצפייה בפרויקט</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => {}}
              className="inline-flex items-center px-6 py-3 rounded-xl font-medium
                       bg-gradient-to-r from-primary-500 to-primary-600 text-white
                       hover:from-primary-600 hover:to-primary-700
                       transition-all duration-300"
            >
              <span className="ml-2">טען עוד פרויקטים</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
