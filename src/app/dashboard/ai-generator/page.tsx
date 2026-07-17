"use client";

import { useState } from "react";

import GeneratorForm from "@/components/ai/GeneratorForm";
import OutputCard from "@/components/ai/OutputCard";
import HistoryList from "@/components/ai/HistoryList";

export default function AIContentGeneratorPage() {
  const [content, setContent] = useState("");

  return (
    <div className="container mx-auto px-6 py-10">

      <h1 className="mb-8 text-4xl font-bold">
        AI Content Generator
      </h1>

      <div className="grid gap-6 lg:grid-cols-3">

        <GeneratorForm
          onGenerated={setContent}
        />

        <OutputCard
          content={content}
        />

        <HistoryList
          onSelect={setContent}
        />

      </div>

    </div>
  );
}