import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../types';

const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'בניית אתרים מודרניים',
    slug: 'modern-web-development',
    date: '2025-02-12',
    author: 'יוסי כהן',
    category: 'פיתוח אתרים',
    excerpt: 'למד על הטכנולוגיות החדשות ביותר בבניית אתרים מודרניים',
    content: 'תוכן המאמר המלא על בניית אתרים מודרניים...',
    image: '/images/blog/web-dev.jpg',
    tags: ['web development', 'frontend', 'react']
  },
  {
    id: '2',
    title: 'אבטחת מידע בעידן הדיגיטלי',
    slug: 'cybersecurity-digital-age',
    date: '2025-02-10',
    author: 'רונית לוי',
    category: 'אבטחת מידע',
    excerpt: 'טיפים חשובים לאבטחת המידע שלך באינטרנט',
    content: 'תוכן המאמר המלא על אבטחת מידע...',
    image: '/images/blog/security.jpg',
    tags: ['security', 'cybersecurity', 'privacy']
  }
];

const Blog: FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">הבלוג שלנו</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          תובנות, טיפים וחדשות מעולם הטכנולוגיה והפיתוח
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {samplePosts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
