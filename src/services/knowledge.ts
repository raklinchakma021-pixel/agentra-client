import { apiFetch } from "@/lib/api";

export const getKnowledge = async () => {
  return apiFetch("/knowledge");
};