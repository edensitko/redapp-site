'use client';

import { FC, useEffect, useState } from 'react';
import { BlogPost as BlogPostType } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCalendar, FaUser, FaTags, FaShare, FaClock, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const [tableOfContents, setTableOfContents] = useState<{ id: string; title: string; level: number }[]>([]);
  const [readingTime, setReadingTime] = useState<number>(0);

  useEffect(() => {
    // Calculate reading time
    const wordsPerMinute = 200;
    const wordCount = post.content.split(/\s+/).length;
    setReadingTime(Math.ceil(wordCount / wordsPerMinute));

    // Generate table of contents
    const doc = new DOMParser().parseFromString(post.content, 'text/html');
    const headings = Array.from(doc.querySelectorAll('h2, h3, h4'));
    const toc = headings.map(heading => ({
      id: heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-') || '',
      title: heading.textContent || '',
      level: parseInt(heading.tagName.charAt(1))
    }));
    setTableOfContents(toc);
  }, [post.content]);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
      </div>
    );
  }

  return (
    <section className="relative w-full py-24 overflow-hidden" dir="rtl">
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
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/blog" 
            className="inline-flex items-center px-4 py-2 text-red-500 hover:text-red-600 mb-8 transition-colors duration-200 bg-white/80 dark:bg-gray-800/80 rounded-xl backdrop-blur-sm border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md"
          >
            <FaArrowLeft className="ml-2" />
            חזרה לבלוג
          </Link>
        </motion.div>

        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-100 dark:border-gray-700 shadow-xl"
        >
          {/* Header */}
          <header className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6"
            >
              <div className="flex items-center px-3 py-1 bg-gray-100/80 dark:bg-gray-700/80 rounded-full">
                <FaUser className="ml-2 text-red-500" />
                {post.author}
              </div>
              <div className="flex items-center px-3 py-1 bg-gray-100/80 dark:bg-gray-700/80 rounded-full">
                <FaCalendar className="ml-2 text-red-500" />
                {new Date(post.date).toLocaleDateString('he-IL')}
              </div>
              <div className="flex items-center px-3 py-1 bg-gray-100/80 dark:bg-gray-700/80 rounded-full">
                <FaClock className="ml-2 text-red-500" />
                {readingTime} דקות קריאה
              </div>
              <button 
                className="flex items-center px-3 py-1 bg-gray-100/80 dark:bg-gray-700/80 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                onClick={() => navigator.share({ title: post.title, url: window.location.href })}
              >
                <FaShare className="ml-2 text-red-500" />
                שתף
              </button>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
            >
              {post.title}
            </motion.h1>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap gap-2"
              >
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            )}
          </header>

          {/* Table of Contents */}
          {tableOfContents.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-12 p-6 bg-gray-50/80 dark:bg-gray-900/80 rounded-xl border border-gray-100 dark:border-gray-700"
            >
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">תוכן העניינים</h2>
              <nav>
                <ul className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <li key={index} style={{ paddingRight: `${(item.level - 2) * 1}rem` }}>
                      <a
                        href={`#${item.id}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}

          {/* Featured Image */}
          {post.image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative mb-12 h-[500px] w-full rounded-2xl overflow-hidden"
            >
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60" />
            </motion.div>
          )}

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="prose prose-lg md:prose-xl max-w-none dark:prose-invert
              prose-headings:text-gray-900 dark:prose-headings:text-white 
              prose-p:text-gray-700 dark:prose-p:text-gray-300 
              prose-a:text-red-500 hover:prose-a:text-red-600 
              prose-img:rounded-xl
              prose-h2:scroll-mt-20 prose-h3:scroll-mt-20
              prose-p:leading-relaxed
              prose-li:text-gray-700 dark:prose-li:text-gray-300
              prose-strong:text-gray-900 dark:prose-strong:text-white
              prose-blockquote:border-red-500 prose-blockquote:text-gray-700 dark:prose-blockquote:text-gray-300
              prose-code:text-red-500 dark:prose-code:text-red-400
              prose-pre:bg-gray-50 dark:prose-pre:bg-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              <span className="text-gray-600 dark:text-gray-400 text-lg">שתף את המאמר</span>
              <div className="flex gap-4">
                <button 
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors bg-gray-100/80 dark:bg-gray-800/80 rounded-full hover:shadow-md"
                  aria-label="Share on Twitter"
                >
                  <FaTwitter className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`, '_blank')}
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors bg-gray-100/80 dark:bg-gray-800/80 rounded-full hover:shadow-md"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                  className="p-3 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors bg-gray-100/80 dark:bg-gray-800/80 rounded-full hover:shadow-md"
                  aria-label="Share on Facebook"
                >
                  <FaFacebook className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.article>
      </div>
    </section>
  );
};

export default BlogPost;
