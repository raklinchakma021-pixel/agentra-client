import KnowledgeCard from "./KnowledgeCard";

export default function KnowledgeGrid({
  articles,
}: {
  articles: any[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {articles.map((article) => (
        <KnowledgeCard
          key={article._id}
          article={article}
        />
      ))}
    </div>
  );
}