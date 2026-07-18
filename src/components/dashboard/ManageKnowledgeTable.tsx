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
    `${process.env.NEXT_PUBLIC_API_URL}/knowledge`
  );

  if (!res.ok) throw new Error("Failed");

  return res.json();
}

export default function ManageKnowledgeTable() {
  const { data, isLoading } = useQuery({
    queryKey: ["knowledge"],
    queryFn: getKnowledge,
  });

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

      <div className="hidden md:block overflow-x-auto rounded-xl border">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Pricing</th>
              <th>Level</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item: Knowledge) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={item.image}
                    className="w-16 h-16 rounded object-cover"
                    alt=""
                  />
                </td>

                <td>{item.title}</td>

                <td>{item.category}</td>

                <td>{item.pricing}</td>

                <td>{item.level}</td>

                <td>
                  <div className="flex gap-2 justify-center">
                    <Link
                      href={`/knowledge/${item._id}`}
                      className="btn btn-info btn-sm"
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

      <div className="grid gap-5 md:hidden">
        {data.map((item: Knowledge) => (
          <div
            key={item._id}
            className="border rounded-xl p-4 shadow"
          >
            <img
              src={item.image}
              className="w-full h-44 rounded object-cover"
              alt=""
            />

            <h2 className="font-bold mt-3">
              {item.title}
            </h2>

            <p>{item.category}</p>

            <p>{item.pricing}</p>

            <p>{item.level}</p>

            <div className="flex gap-3 mt-4">
              <Link
                href={`/knowledge/${item._id}`}
                className="btn btn-info btn-sm flex-1"
              >
                View
              </Link>

              <DeleteKnowledgeButton id={item._id} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}