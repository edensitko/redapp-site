import React from 'react';
import BlogComponent from '../../components/Blog';

const BlogPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="relative py-24 overflow-hidden" dir="rtl">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ef4444_1px,transparent_1px),linear-gradient(to_bottom,#ef4444_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.03]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BlogComponent />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
