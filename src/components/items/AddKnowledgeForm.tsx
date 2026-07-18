"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createItem } from "@/services/items";

export default function AddKnowledgeForm() {
  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    overview: "",
    category: "",
    level: "",
    readTime: "",
    image: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createItem,

    onSuccess: () => {
      toast.success("Knowledge added successfully!");

      queryClient.invalidateQueries({
        queryKey: ["items"],
      });

      setForm({
        title: "",
        shortDescription: "",
        overview: "",
        category: "",
        level: "",
        readTime: "",
        image: "",
      });
    },

    onError: () => {
      toast.error("Failed to add knowledge");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    mutation.mutate(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border bg-base-100 p-8 shadow"
    >
      {/* Title */}

      <div>
        <label className="label">
          <span className="label-text font-semibold">
            Title
          </span>
        </label>

        <input
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
          className="input input-bordered w-full"
          placeholder="AI Article Title"
          required
        />
      </div>

      {/* Short Description */}

      <div>
        <label className="label">
          <span className="label-text font-semibold">
            Short Description
          </span>
        </label>

        <textarea
          name="shortDescription"
          rows={3}
          value={form.shortDescription}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          placeholder="Short description..."
          required
        />
      </div>

      {/* Full Description */}

      <div>
        <label className="label">
          <span className="label-text font-semibold">
            Full Description
          </span>
        </label>

        <textarea
          name="overview"
          rows={6}
          value={form.overview}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          placeholder="Write the complete article..."
          required
        />
      </div>

      {/* Category & Level */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="label">
            <span className="label-text font-semibold">
              Category
            </span>
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Category</option>
            <option value="Prompt Engineering">
              Prompt Engineering
            </option>
            <option value="LLM">LLM</option>
            <option value="Development">Development</option>
            <option value="Database">Database</option>
            <option value="AI Tools">AI Tools</option>
            <option value="Machine Learning">
              Machine Learning
            </option>
            <option value="AI Agents">AI Agents</option>
          </select>
        </div>

        <div>
          <label className="label">
            <span className="label-text font-semibold">
              Level
            </span>
          </label>

          <select
            name="level"
            value={form.level}
            onChange={handleChange}
            className="select select-bordered w-full"
            required
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">
              Intermediate
            </option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Reading Time & Image */}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="label">
            <span className="label-text font-semibold">
              Reading Time
            </span>
          </label>

          <input
            name="readTime"
            type="text"
            value={form.readTime}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="6 min"
            required
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text font-semibold">
              Image URL
            </span>
          </label>

          <input
            name="image"
            type="url"
            value={form.image}
            onChange={handleChange}
            className="input input-bordered w-full"
            placeholder="https://..."
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={mutation.isPending}
        className="btn btn-primary w-full"
      >
        {mutation.isPending
          ? "Adding Knowledge..."
          : "Submit"}
      </button>
    </form>
  );
}