"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { knowledge } from "@/data/knowledge";
import { getItems } from "@/services/items";

import KnowledgeGrid from "@/components/knowledge/KnowledgeGrid";
import KnowledgePagination from "@/components/knowledge/KnowledgePagination";
import KnowledgeFilters from "@/components/knowledge/KnowledgeFilters";
import KnowledgeSkeleton from "@/components/knowledge/KnowledgeSkeleton";

const ITEMS_PER_PAGE = 8;

export default function KnowledgePage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All");
  const [sort, setSort] = useState("Newest");
  const [page, setPage] = useState(1);

  const { data: dbItems = [], isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  const formattedItems = useMemo(
    () =>
      dbItems.map((item: any) => ({
        _id: item._id,
        title: item.title,
        description: item.shortDescription,
        overview: item.overview,
        image:
          item.image ||
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
        images: item.image
          ? [item.image]
          : [
              "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
            ],
        category: item.category,
        level: item.level,
        author: item.author || "Anonymous",
        rating: item.rating ?? 5,
        reviews: item.reviews ?? 0,
        date: new Date(item.createdAt).toLocaleDateString(),
        readTime: item.readTime,
        tags: item.tags ?? [],
      })),
    [dbItems]
  );

  const allArticles = useMemo(
    () => [...knowledge, ...formattedItems],
    [formattedItems]
  );

  const filteredArticles = useMemo(() => {
    let data = [...allArticles];

    // Search
    data = data.filter(
      (item) =>
        item.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        item.description
          .toLowerCase()
          .includes(search.toLowerCase())
    );

    // Category
    if (category !== "All") {
      data = data.filter(
        (item) => item.category === category
      );
    }

    // Level
    if (level !== "All") {
      data = data.filter(
        (item) => item.level === level
      );
    }

    // Sorting
    switch (sort) {
      case "Highest Rating":
        data.sort((a, b) => b.rating - a.rating);
        break;

      case "Reading Time":
        data.sort(
          (a, b) =>
            parseInt(a.readTime) -
            parseInt(b.readTime)
        );
        break;

      default:
        data.sort(
          (a, b) =>
            new Date(b.date).getTime() -
            new Date(a.date).getTime()
        );
    }

    return data;
  }, [allArticles, search, category, level, sort]);

  const totalPages = Math.ceil(
    filteredArticles.length / ITEMS_PER_PAGE
  );

  const paginatedArticles = filteredArticles.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  if (isLoading) {
    return (
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <KnowledgeSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-8 px-5 py-10">
      <KnowledgeFilters
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        level={level}
        setLevel={setLevel}
        sort={sort}
        setSort={setSort}
      />

      <KnowledgeGrid articles={paginatedArticles} />

      <KnowledgePagination
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}