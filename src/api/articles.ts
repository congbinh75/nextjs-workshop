import { Article, ArticleCardContent } from "@/types/article";
import path from "node:path";
import fs from "node:fs";

export const getAllArticlesAsync = async (): Promise<ArticleCardContent[]> => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "articles-cards.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return data.articles as ArticleCardContent[];
};

export const getArticlesByCategory = async (
  category: string
): Promise<ArticleCardContent[]> => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "articles-cards.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  const filteredData = data.articles.filter((article: ArticleCardContent) =>
    article.categories
      .map((a) => {
        return a.toLowerCase();
      })
      .includes(category.toLowerCase())
  );
  return filteredData as ArticleCardContent[];
};

export const getArticleByIdAsync = async (id: number) => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "articles.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  console.log(data.articles);
  return data.articles.find((article: Article) => article.id === id);
};