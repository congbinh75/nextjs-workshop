import { Article } from "@/types/article";
import path from "node:path";
import fs from "node:fs";

export const getAllArticlesAsync = async (): Promise<Article[]> => {
  const filePath = path.join(process.cwd(), "public", "data", "all-articles.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data.articles as Article[];
};
