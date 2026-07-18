import {
  Calendar,
  Clock,
  Star,
  User,
} from "lucide-react";

export default function KnowledgeInfo({
  article,
}: any) {
  return (
    <section>
      <span className="badge badge-primary">
        {article.category}
      </span>

      <h1 className="mt-3 text-4xl font-bold">
        {article.title}
      </h1>

      <p className="mt-4 text-gray-600">
        {article.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-6 text-sm">
        <div className="flex items-center gap-2">
          <User size={18} />
          {article.author}
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={18} />
          {article.date}
        </div>

        <div className="flex items-center gap-2">
          <Clock size={18} />
          {article.readTime}
        </div>

        <div className="flex items-center gap-2">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          {article.rating}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-3 text-2xl font-bold">
          Overview
        </h2>

        <p className="leading-8 text-gray-700">
          {article.overview}
        </p>
      </div>
    </section>
  );
}