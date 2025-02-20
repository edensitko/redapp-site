import React from 'react';
import { notFound } from 'next/navigation';
import BlogPost from '@/components/BlogPost';
import { blogPosts } from '@/data/blog';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
