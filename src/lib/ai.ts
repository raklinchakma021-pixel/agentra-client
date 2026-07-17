const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export interface GenerateContentPayload {
  type: "blog" | "product" | "documentation" | "social";
  topic: string;
  audience: string;
  tone: string;
  length: "short" | "medium" | "long";
}

export interface AIResponse {
  success: boolean;
  message: string;
  data: {
    type: string;
    topic: string;
    audience: string;
    tone: string;
    length: string;
    content: string;
  };
}
export interface HistoryItem {
  _id: string;
  type: string;
  topic: string;
  audience: string;
  tone: string;
  length: string;
  content: string;
  createdAt: string;
}
// Generate AI Content
export async function generateContent(
  payload: GenerateContentPayload
): Promise<AIResponse> {
  const response = await fetch(`${API_URL}/ai/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to generate content");
  }

  return response.json();
}

// Regenerate AI Content
export async function regenerateContent(
  payload: GenerateContentPayload
): Promise<AIResponse> {
  const response = await fetch(`${API_URL}/ai/regenerate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to regenerate content");
  }

  return response.json();
}

// Get History
export async function getHistory(): Promise<{
  success: boolean;
  data: HistoryItem[];
}> {
  const response = await fetch(`${API_URL}/ai/history`);

  if (!response.ok) {
    throw new Error("Failed to fetch history");
  }

  return response.json();
}

// Delete History
export async function deleteHistory(id: string) {
  const response = await fetch(`${API_URL}/ai/history/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete history");
  }

  return response.json();
}