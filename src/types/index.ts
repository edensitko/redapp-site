export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  tags: string[];
}

export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}
