import { type GetStaticProps, type GetStaticPaths, type NextPage } from 'next';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';
import { blogPosts, type BlogPost } from '../../data/blog';
import SEO from '../../components/SEO';
import ReactMarkdown from 'react-markdown';

interface Props {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

const BlogPostPage: NextPage<Props> = ({ post, relatedPosts }) => {
  return (
    <>
      <SEO 
        title={`${post.title} - Red Software Blog`}
        description={post.excerpt}
      />
      
      <main className="min-h-screen bg-gray-50 dark:bg-gray-800/50" dir="rtl">
        {/* Hero Section */}
        <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]" />
            </div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <Link 
                  href={`/blog?category=${post.category}`}
                  className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary-500/20 text-primary-300 hover:bg-primary-500/30 transition-colors duration-300"
                >
                  {post.category}
                </Link>
                <time className="text-sm text-gray-300/80">
                  {new Date(post.date).toLocaleDateString('he-IL')}
                </time>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-gray-300/90 max-w-2xl mx-auto mb-8">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-center gap-2 text-gray-300/80">
                <span>מאת</span>
                <span className="font-medium text-white">{post.author}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 -mt-32 relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-8 md:p-12"
            >
              <article className="prose dark:prose-invert prose-lg max-w-none">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </article>
              
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
                פוסטים נוספים שיעניינו אותך
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300">
                        <div className="relative aspect-[16/9]">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-primary-500 dark:text-primary-400">
                              {relatedPost.category}
                            </span>
                            <time className="text-sm text-gray-500 dark:text-gray-400">
                              {new Date(relatedPost.date).toLocaleDateString('he-IL')}
                            </time>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              מאת {relatedPost.author}
                            </span>
                            <span className="text-primary-500 dark:text-primary-400 group-hover:translate-x-2 transition-transform duration-300">
                              →
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Back to Blog */}
        <div className="fixed bottom-8 right-8 z-50">
          <Link
            href="/blog"
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl dark:shadow-gray-900/50 transition-all duration-300 group"
          >
            <span className="text-gray-900 dark:text-white">חזרה לבלוג</span>
            <span className="text-primary-500 dark:text-primary-400 transform rotate-180 group-hover:-translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogPosts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params?.slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return {
    props: {
      post,
      relatedPosts,
    },
  };
};

export default BlogPostPage;
