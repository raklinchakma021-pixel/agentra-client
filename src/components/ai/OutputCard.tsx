"use client";

import { Copy, Download } from "lucide-react";
import { useState } from "react";

interface OutputCardProps {
  content: string;
}

export default function OutputCard({
  content,
}: OutputCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!content) return;

    await navigator.clipboard.writeText(content);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const handleDownload = () => {
    if (!content) return;

    const blob = new Blob([content], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "ai-content.txt";

    link.click();

    URL.revokeObjectURL(url);
  };

  if (!content) {
    return (
      <div className="rounded-xl border bg-white p-8 shadow text-center text-gray-500">
        Your AI generated content will appear here.
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white shadow">

      {/* Header */}
      <div className="flex items-center justify-between border-b p-4">

        <h2 className="text-xl font-bold">
          Generated Content
        </h2>

        <div className="flex gap-2">

          <button
            onClick={handleCopy}
            className="btn btn-sm btn-outline"
          >
            <Copy size={16} />

            {copied ? "Copied!" : "Copy"}
          </button>

          <button
            onClick={handleDownload}
            className="btn btn-sm btn-primary"
          >
            <Download size={16} />

            TXT
          </button>

        </div>

      </div>

      {/* Content */}
      <div className="max-h-[600px] overflow-y-auto p-6">

        <pre className="whitespace-pre-wrap leading-7 font-sans">
          {content}
        </pre>

      </div>

    </div>
  );
}