import KnowledgeCard from "./KnowledgeCard";

export default function RelatedArticles({
  articles,
}: any) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Related Articles
      </h2>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {articles.map((article: any) => (
          <KnowledgeCard
            key={article._id}
            article={article}
          />
        ))}
      </div>
    </section>
  );
}