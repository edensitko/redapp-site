import { FC } from 'react';
import { BlogPost as BlogPostType } from '../types';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaCalendar, FaUser, FaTags } from 'react-icons/fa';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost: FC<BlogPostProps> = ({ post }) => {
  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Post not found</h2>
      </div>
    );
  }

  return (
    <section className="relative w-full py-24 overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-red-500 hover:text-red-600 mb-8 transition-colors duration-200"
        >
          <FaArrowLeft className="ml-2" />
          חזרה לבלוג
        </Link>

        <article className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/60 shadow-lg">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">{post.title}</h1>
            
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center">
                <FaUser className="ml-2" />
                {post.author}
              </div>
              <div className="flex items-center">
                <FaCalendar className="ml-2" />
                {post.date}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative mb-8 h-[400px] w-full">
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
              {/* Dark overlay with light center */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-black/40 to-transparent" />
              <div className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-8 flex items-center gap-2">
              <FaTags className="text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
