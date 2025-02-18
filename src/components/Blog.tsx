import { FC, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { FaArrowLeft } from 'react-icons/fa';

const Blog: FC = () => {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  // Get the latest 3 blog posts
  const latestPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-800/50 py-20 px-4" dir="rtl">
      <div className="max-w-7xl mx-auto">
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
              בלוג
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            המאמרים האחרונים שלנו
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            תוכן מקצועי ומעשיר בנושאי פיתוח ועיצוב אתרים
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-6">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              <Link href={`/blog/${post.id}`} className="block flex-1">
                <div className="h-full bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    {!loadedImages[post.id] && (
                      <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
                    )}
                    <img
                      src={post.image}
                      alt={post.title}
                      className={`object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ${
                        loadedImages[post.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(post.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block px-3 py-1 text-sm bg-gray-100/80 dark:bg-gray-700/80 
                                   text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm
                                   border border-gray-200/50 dark:border-gray-600/50">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString('he-IL')}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-primary-500 dark:text-primary-400 mt-auto">
                      <span className="text-sm font-medium">קרא עוד</span>
                      <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-xl
                     shadow-lg hover:shadow-xl transition-all duration-300
                     border border-gray-200 dark:border-gray-700
                     text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400"
          >
            <span>לכל המאמרים</span>
            <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
