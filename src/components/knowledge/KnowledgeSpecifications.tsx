export default function KnowledgeSpecifications({
  article,
}: any) {
  return (
    <section>
      <h2 className="mb-6 text-3xl font-bold">
        Key Information
      </h2>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Author</h3>
          <p>{article.author}</p>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Level</h3>
          <p>{article.level}</p>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Category</h3>
          <p>{article.category}</p>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Reading Time</h3>
          <p>{article.readTime}</p>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Published</h3>
          <p>{article.date}</p>
        </div>

        <div className="rounded-xl border p-5">
          <h3 className="font-semibold">Tags</h3>

          <div className="mt-3 flex flex-wrap gap-2">
            {article.tags.map((tag: string) => (
              <span
                key={tag}
                className="badge badge-outline"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}