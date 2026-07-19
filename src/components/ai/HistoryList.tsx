"use client";

import { useEffect, useState } from "react";
import { getHistory, deleteHistory, HistoryItem } from "@/lib/ai";
import { Trash2 } from "lucide-react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
interface HistoryListProps {
  onSelect: (content: string) => void;
}

export default function HistoryList({
  onSelect,
}: HistoryListProps) {


const queryClient = useQueryClient();

const { data, isLoading, error } = useQuery({
  queryKey: ["history"],
  queryFn: getHistory,
});
const deleteMutation = useMutation({
  mutationFn: deleteHistory,
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ["history"],
    });
  },
});
 const handleDelete = (id: string) => {
  deleteMutation.mutate(id);
};

if (isLoading) {
    return (
      <div className="rounded-xl border bg-white p-6 shadow">
        Loading history...
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white shadow">

      <div className="border-b p-4">
        <h2 className="text-xl font-bold text-blue-700">
          History
        </h2>
      </div>

      <div className="max-h-[600px] overflow-y-auto">

       {data?.data.length === 0 && (
          <p className="p-6 text-gray-500">
            No history found.
          </p>
        )}

  {data?.data.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between border-b p-4 hover:bg-gray-50"
          >
            <button
              onClick={() => onSelect(item.content)}
              className="flex-1 text-left"
            >
              <p className="font-semibold">
                {item.topic}
              </p>

              <p className="text-sm text-gray-500">
                {item.type}
              </p>
            </button>

            <button
              onClick={() => handleDelete(item._id)}
              className="btn btn-sm btn-error btn-outline"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}