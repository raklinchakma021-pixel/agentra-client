"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function DeleteKnowledgeButton({
  id,
}: {
  id: string;
}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/items/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Delete failed");
      }
    },

    onSuccess: () => {
      toast.success("Deleted");

      queryClient.invalidateQueries({
        queryKey: ["knowledge"],
      });
    },

    onError: () => {
      toast.error("Delete Failed");
    },
  });

  return (
    <button
      onClick={() => mutation.mutate()}
      className="btn btn-error bg-red-600 text-white px-4 btn-sm mr-6"
    >
      Delete
    </button>
  );
}