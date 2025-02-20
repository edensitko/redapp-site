import React from 'react';
import Blog from '@/components/Blog';

export const metadata = {
  title: 'Blog - RedApp',
  description: 'Stay updated with the latest insights, trends, and news in web development and digital solutions.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Blog />
    </main>
  );
}
