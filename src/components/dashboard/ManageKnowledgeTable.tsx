"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import DeleteKnowledgeButton from "./DeleteKnowledgeButton";

interface Knowledge {
  _id: string;
  title: string;
  category: string;
  pricing: string;
  level: string;
  image: string;
}

async function getKnowledge() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items`
  );

  if (!res.ok) throw new Error("Failed");

  const json = await res.json();

  return json.data; // <-- Return the array only
}

export default function ManageKnowledgeTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["knowledge"],
    queryFn: getKnowledge,
  });

console.log("DATA:", data);
  if (isLoading) {
    return (
      <div className="flex justify-center py-20">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="text-center py-20">
        No Knowledge Found
      </div>
    );
  }

  return (
    <>
      {/* Desktop */}

    <div className="hidden md:block overflow-x-auto  rounded-2xl border border-base-300 bg-base-100 shadow-xl">
  <table className="table table-zebra">
    <thead className="bg-base-200">
      <tr className="text-base-content">
        <th className="px-6 py-5 text-sm font-bold uppercase tracking-wide">
          Article
        </th>

        <th className="text-sm font-bold uppercase tracking-wide">
          Category
        </th>

        <th className="text-sm font-bold uppercase tracking-wide">
          Price
        </th>

        <th className="text-sm font-bold uppercase tracking-wide">
          Level
        </th>

        <th className="text-center text-sm font-bold uppercase tracking-wide">
          Actions
        </th>
      </tr>
    </thead>

    <tbody>
      {data.map((item: Knowledge) => (
        <tr
          key={item._id}
          className="hover:bg-primary/5 transition-all duration-300 m-6"
        >
          <td className="py-5">
            <div className="flex items-center gap-5">
              <img
                src={item.image}
                alt={item.title}
                className="h-20 w-20 rounded-xl object-cover ring-2 ring-primary/20 ml-6"
              />

              <div>
                <h2 className="font-semibold text-lg">
                  {item.title}
                </h2>

              </div>
            </div>
          </td>

          <td>
            <span className="badge badge-primary badge-outline badge-lg p-6">
              {item.category || "AI"}
            </span>
          </td>

          <td>
            <span className="badge p-6 badge-success badge-lg">
              {item.pricing || "Free"}
            </span>
          </td>

          <td>
            <span className="badge badge-warning badge-lg p-6">
              {item.level || "Beginner"}
            </span>
          </td>

          <td>
            <div className="flex justify-center gap-3">
              <Link
                 href={`/knowledge/${item._id}`}
                className="btn btn-primary bg-blue-600 px-4 btn-sm text-white rounded-lg"
              >
                View
              </Link>

              <DeleteKnowledgeButton id={item._id} />
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* Mobile */}

      <div className="grid gap-6 lg:hidden">
  {data.map((item: Knowledge) => (
    <div
      key={item._id}
      className="bg-base-100 rounded-2xl shadow-lg overflow-hidden border border-base-300"
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">
        <h2 className="font-bold text-xl">
          {item.title}
        </h2>

      

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="badge badge-secondary">
            {item.category || "AI"}
          </span>

          <span className="badge badge-success">
            {item.pricing || "Free"}
          </span>

          <span className="badge badge-accent">
            {item.level || "Beginner"}
          </span>
        </div>

        <div className="flex gap-3 mt-6">
          <Link
         href={`/knowledge/${item._id}`}
            className="btn btn-primary bg-blue-600 text-white px-4 flex-1"
          >
            View
          </Link>

          <DeleteKnowledgeButton id={item._id} />
        </div>
      </div>
    </div>
  ))}
</div>
    </>
  );
}