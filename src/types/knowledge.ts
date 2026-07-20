export interface KnowledgeArticle {
  _id: string;
  title: string;
  description: string;
  overview: string;
  images: string[];
  category: string;
  author: string;
  level: string;
  rating: number;
  reviews: number;
  date: string;
  readTime: string;
  tags: string[];
}