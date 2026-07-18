import Link from "next/link";
import Image from "next/image";
import { Calendar, Star, Clock } from "lucide-react";

interface KnowledgeCardProps {
  article: {
    _id: string;
    title: string;
    description: string;
    images: string[];
    category: string;
    date: string;
    rating: number;
    readTime: string;
  };
}
export default function KnowledgeCard({
  article,
}: KnowledgeCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-52 w-full">
        <Image
          src={article.images[0]}
          alt={article.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-3 w-fit rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-600">
          {article.category}
        </span>

        <h2 className="line-clamp-2 text-xl font-bold">
          {article.title}
        </h2>

        <p className="mt-3 line-clamp-2 text-sm text-gray-600">
          {article.description}
        </p>

        <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            {article.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={14} />
            {article.readTime}
          </div>

          <div className="flex items-center gap-2">
            <Star
              size={14}
              className="fill-yellow-400 text-yellow-400"
            />
            {article.rating}
          </div>
        </div>

        <Link
          href={`/knowledge/${article._id}`}
          className="mt-auto pt-6"
        >
          <button className="btn btn-primary w-full rounded-xl">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}