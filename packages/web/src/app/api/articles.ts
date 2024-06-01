import { api } from "@/data/api";

export const fetchArticleById = async (id: string) => {
  const response = await api(`/articles/${id}`);
  const data = await response.json();
  return data;
};
