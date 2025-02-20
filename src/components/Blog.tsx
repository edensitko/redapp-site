'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blog';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

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
    <section className="relative py-40 overflow-hidden" dir="rtl" id="blog">
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
              בלוג
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
            המאמרים האחרונים שלנו
          </h2>
          <div className="w-[200px] h-1.5 bg-gradient-to-r from-red-700 to-red-300 rounded-full mx-auto mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            תוכן מקצועי ומעניין בנושאי פיתוח, עיצוב ושיווק דיגיטלי
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col h-full"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="h-full bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className={`object-cover transform group-hover:scale-105 transition-transform duration-500 ${
                        loadedImages[post.id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={() => handleImageLoad(post.id)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block px-3 py-1 text-sm bg-red-100/80 dark:bg-red-900/20 
                                   text-red-700 dark:text-red-300 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.date).toLocaleDateString('he-IL')}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-red-500 dark:text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300 transition-colors duration-200">
                      <span className="ml-2">קרא עוד</span>
                      <FaArrowRight className="transform rotate-180" />
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
            href="/blog"
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-red-500 rounded-xl hover:bg-red-600 transition-colors duration-200"
          >
            לכל המאמרים
            <FaArrowLeft className="mr-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
