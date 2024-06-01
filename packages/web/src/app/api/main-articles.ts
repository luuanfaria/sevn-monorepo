import { api } from "@/data/api";

export const fetchMainArticles = async () => {
  const response = await api('/main-articles');
  const data = await response.json();
  return data;
};
