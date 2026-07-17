"use client";

import { useState } from "react";
import {
  generateContent,
  GenerateContentPayload,
} from "@/lib/ai";
import { useMutation, useQueryClient } from "@tanstack/react-query";
interface GeneratorFormProps {
  onGenerated: (content: string) => void;
}

export default function GeneratorForm({
  onGenerated,
}: GeneratorFormProps) {
  const [formData, setFormData] = useState<GenerateContentPayload>({
    type: "blog",
    topic: "",
    audience: "",
    tone: "Professional",
    length: "medium",
  });

const queryClient = useQueryClient();
const generateMutation = useMutation({
  mutationFn: generateContent,

  onSuccess: (res) => {
    onGenerated(res.data.content);

    // Refresh history automatically
    queryClient.invalidateQueries({
      queryKey: ["history"],
    });
  },

  onError: () => {
    alert("Failed to generate content");
  },
});
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  generateMutation.mutate(formData);
};
 
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl border p-6 bg-white shadow"
    >
      <h2 className="text-2xl font-bold">
        AI Content Generator
      </h2>

      {/* Type */}
      <div>
        <label className="block mb-1 font-medium">
          Content Type
        </label>

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="blog">Blog</option>
          <option value="product">
            Product Description
          </option>
          <option value="documentation">
            Documentation
          </option>
          <option value="social">
            Social Media
          </option>
        </select>
      </div>

      {/* Topic */}
      <div>
        <label className="block mb-1 font-medium">
          Topic
        </label>

        <input
          name="topic"
          type="text"
          value={formData.topic}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Enter topic"
          required
        />
      </div>

      {/* Audience */}
      <div>
        <label className="block mb-1 font-medium">
          Audience
        </label>

        <input
          name="audience"
          type="text"
          value={formData.audience}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="Target audience"
          required
        />
      </div>

      {/* Tone */}
      <div>
        <label className="block mb-1 font-medium">
          Tone
        </label>

        <select
          name="tone"
          value={formData.tone}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option>Professional</option>
          <option>Friendly</option>
          <option>Casual</option>
          <option>Formal</option>
          <option>Persuasive</option>
          <option>Creative</option>
        </select>
      </div>

      {/* Length */}
      <div>
        <label className="block mb-1 font-medium">
          Length
        </label>

        <select
          name="length"
          value={formData.length}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
      </div>

      <button
        type="submit"
      disabled={generateMutation.isPending}
        className="btn btn-primary w-full"
      >
       {generateMutation.isPending ? "Generating..." : "Generate"}
      </button>
    </form>
  );
}