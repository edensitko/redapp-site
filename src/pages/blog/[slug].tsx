import { motion } from 'framer-motion';
import { blogPosts } from '@/data/blog';
import Link from 'next/link';
import { FaArrowRight, FaCalendar, FaUser } from 'react-icons/fa';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

interface BlogPostPageProps {
  post: BlogPost;
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  if (!post) return null;

  return (
    <>
      <Head>
        <title>{post.title} | RedApp Blog</title>
        <meta name="description" content={post.excerpt} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-[rgb(26,27,27)]" dir="rtl">
        {/* Hero Section */}
        <div className="relative h-[60vh] min-h-[400px] w-full">
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover brightness-[0.7] dark:brightness-[0.6]"
            />
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6"
                >
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-white hover:text-primary-400 transition-colors"
                  >
                    <FaArrowRight className="ml-2" />
                    <span>חזרה לבלוג</span>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="flex items-center gap-4 mb-4"
                >
                  <span className="inline-block px-3 py-1 text-sm bg-primary-500 text-white rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-white">
                    <FaCalendar className="text-sm" />
                    <span className="text-sm">{new Date(post.date).toLocaleDateString('he-IL')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <FaUser className="text-sm" />
                    <span className="text-sm">{post.author}</span>
                  </div>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                  {post.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-white"
                >
                  {post.excerpt}
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-20 bg-white dark:bg-[rgb(26,27,27)]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <div 
                  className="text-gray-900 dark:text-white leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </motion.article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogPostPageProps> = async ({ params }) => {
  const post = blogPosts.find((p) => p.id === params?.slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
