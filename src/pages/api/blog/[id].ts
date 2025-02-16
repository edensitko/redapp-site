import { NextApiRequest, NextApiResponse } from 'next';
import { BlogPost } from '../../../types';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (typeof id !== 'string') {
    res.status(400).json({ error: 'Invalid ID' });
    return;
  }

  const post: BlogPost = {
    id,
    title: `Blog Post ${id}`,
    slug: `blog-post-${id}`,
    date: new Date().toISOString(),
    author: 'John Doe',
    category: 'Technology',
    excerpt: 'This is a sample blog post excerpt.',
    content: 'This is a sample blog post content.',
    image: '/images/blog/default.jpg',
    tags: ['technology', 'web development'],
  };

  res.status(200).json(post);
}
