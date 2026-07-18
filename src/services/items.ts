import { apiFetch } from "@/lib/api";

export const getItems = async () => {
  const res = await apiFetch("/items");
  return res.data;
};

export const createItem = async (data: any) => {
  const res = await apiFetch("/items", {
    method: "POST",
    body: JSON.stringify(data),
  });

  return res.data;
};