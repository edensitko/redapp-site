import React from 'react';
import { notFound } from 'next/navigation';

const blogPosts = {
  'seo-optimization-guide': {
    title: 'מדריך אופטימיזציה למנועי חיפוש',
    content: 'תוכן המדריך לאופטימיזציה למנועי חיפוש...',
    date: '2024-02-20',
  },
  'web-design-trends-2024': {
    title: 'טרנדים בעיצוב אתרים 2024',
    content: 'תוכן המאמר על טרנדים בעיצוב אתרים...',
    date: '2024-02-15',
  },
  'react-performance-tips': {
    title: 'טיפים לשיפור ביצועים ב-React',
    content: 'תוכן המאמר על שיפור ביצועים ב-React...',
    date: '2024-02-10',
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#1e1e1e] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="text-gray-600 dark:text-gray-400 mb-8">
            {new Date(post.date).toLocaleDateString('he-IL', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
          <div className="text-gray-800 dark:text-gray-200">
            {post.content}
          </div>
        </article>
      </div>
    </main>
  );
}
