import { api } from "@/data/api";

export const fetchSecondaryArticles = async () => {
  const response = await api('/secondary-articles');
  const data = await response.json();
  return data;
};
