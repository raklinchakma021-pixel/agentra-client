"use client";

import { Search } from "lucide-react";

export default function KnowledgeFilters({
  search,
  setSearch,
  category,
  setCategory,
  level,
  setLevel,
  sort,
  setSort,
}: any) {
  return (
    <div className="grid gap-4 md:grid-cols-4">

      <label className="input input-bordered flex items-center gap-2">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="grow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>

      <select
        className="select select-bordered"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>All Categories</option>
        <option>Prompt Engineering</option>
        <option>LLM</option>
        <option>Development</option>
        <option>Database</option>
        <option>AI Tools</option>
        <option>Machine Learning</option>
        <option>AI Agents</option>
      </select>

      <select
        className="select select-bordered"
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option>All level</option>
        <option>Beginner</option>
        <option>Intermediate</option>
        <option>Advanced</option>
      </select>

      <select
        className="select select-bordered"
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option>Newest</option>
        <option>Highest Rating</option>
        <option>Reading Time</option>
      </select>

    </div>
  );
}