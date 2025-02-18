import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import Head from 'next/head';
import { useState } from 'react';

export default function BlogPage() {
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (id: string) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <Head>
        <title>בלוג | RedApp</title>
        <meta name="description" content="תוכן מקצועי ומעשיר בנושאי פיתוח ועיצוב אתרים" />
      </Head>

      <section className="min-h-screen bg-white dark:bg-[rgb(26,27,27)] py-20 px-4" dir="rtl">
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
                       bg-gray-100 dark:bg-[rgb(36,37,37)]
                       border border-gray-200 dark:border-[rgb(46,47,47)]
                       shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-lg font-medium bg-gradient-to-r from-primary-600 to-red-500 bg-clip-text text-transparent">
                בלוג
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1">
              המאמרים האחרונים שלנו
            </h2>
            <div className="w-[200px] h-1.5 bg-gradient-to-r from-primary-700 to-red-300 rounded-full mx-auto mb-2" />
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              תוכן מקצועי ומעשיר בנושאי פיתוח ועיצוב אתרים
            </p>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4 md:px-6 mt-16">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col h-full"
              >
                <Link href={`/blog/${post.id}`} className="block flex-1">
                  <div className="h-full bg-white dark:bg-[rgb(36,37,37)] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[rgb(46,47,47)]">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {!loadedImages[post.id] && (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-[rgb(36,37,37)] animate-pulse" />
                      )}
                      <img
                        src={post.image}
                        alt={post.title}
                        className={`object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ${
                          loadedImages[post.id] ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => handleImageLoad(post.id)}
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-block px-3 py-1 text-sm bg-primary-500 text-white rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(post.date).toLocaleDateString('he-IL')}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Read More Link */}
                      <div className="flex items-center justify-between text-primary-600 dark:text-primary-400 mt-auto">
                        <span className="text-sm font-medium">קרא עוד</span>
                        <FaArrowLeft className="transform group-hover:-translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
