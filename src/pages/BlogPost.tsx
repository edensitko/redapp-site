import { FC } from 'react';
import BlogPostComponent from '../components/BlogPost';
import { BlogPost } from '../types';

const samplePost: BlogPost = {
  id: '1',
  title: 'Sample Blog Post',
  slug: 'sample-blog-post',
  date: '2025-02-12',
  author: 'John Doe',
  category: 'Technology',
  excerpt: 'This is a sample blog post excerpt.',
  content: 'This is a sample blog post content that demonstrates our expertise in web development.',
  image: '/images/blog/sample-post.jpg',
  tags: ['web development', 'technology']
};

const BlogPostPage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative py-16 sm:py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogPostComponent post={samplePost} />
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;
