import { notFound } from "next/navigation";
import { knowledge } from "@/data/knowledge";

import KnowledgeGallery from "@/components/knowledge/KnowledgeGallery";
import KnowledgeInfo from "@/components/knowledge/KnowledgeInfo";
import KnowledgeSpecifications from "@/components/knowledge/KnowledgeSpecifications";
import Reviews from "@/components/knowledge/Reviews";
import RelatedArticles from "@/components/knowledge/RelatedArticles";
import { KnowledgeArticle } from "@/types/knowledge";
interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function KnowledgeDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  // 1. Look in static data first
let article: KnowledgeArticle | undefined = knowledge.find(
  (item) => item._id === id
);
  // 2. If not found, fetch from MongoDB
  if (!article) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/items/${id}`,
        {
          cache: "no-store",
        }
      );

      if (!res.ok) {
        notFound();
      }

      const json = await res.json();

      const item = json.data;

      if (!item) {
        notFound();
      }

    article = {
  _id: item._id,
  title: item.title,
  description: item.shortDescription,
  overview: item.overview,
  images: item.image ? [item.image] : [],
  category: item.category,
  author: item.author || "Anonymous",
  level: item.level,
  rating: item.rating ?? 5,
  reviews: item.reviews ?? 0,
  date: new Date(item.createdAt).toLocaleDateString(),
  readTime: item.readTime,
  tags: item.tags ?? [],
};
    } catch {
      notFound();
    }
  }

  const relatedArticles = knowledge
    .filter((item) => item._id !== article._id)
    .slice(0, 3);

  return (
    <div className="container mx-auto space-y-12 px-5 py-10">
      <KnowledgeGallery images={article.images} />

      <KnowledgeInfo article={article} />

      <KnowledgeSpecifications article={article} />

      <Reviews />

      <RelatedArticles articles={relatedArticles} />
    </div>
  );
}