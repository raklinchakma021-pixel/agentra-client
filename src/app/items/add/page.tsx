"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import AddKnowledgeForm from "@/components/items/AddKnowledgeForm";

export default function AddItemPage() {
  const router = useRouter();

  // Replace with your authentication state later
  const isLoggedIn = true;

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [isLoggedIn, router]);

  if (!isLoggedIn) return null;

  return (
    <div className="container mx-auto max-w-4xl px-5 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold">
        Add AI Knowledge
      </h1>

      <AddKnowledgeForm />
    </div>
  );
}