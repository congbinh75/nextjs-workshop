import { Article, ArticleCardContent } from "@/types/article";
import path from "node:path";
import fs from "node:fs";
import { PaginationModel } from "@/types/pagination";

export const getAllArticlesAsync = async (): Promise<{
  articles: ArticleCardContent[];
  pagination: PaginationModel;
}> => {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "articles-cards.json"
  );
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  return {
    articles: data.articles as ArticleCardContent[],
    pagination: data.pagination,
  };
};

export const getArticlesByCategory = async (
  category: string
): Promise<{ articles: ArticleCardContent[]; pagination: PaginationModel }> => {
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
  return {
    articles: filteredData as ArticleCardContent[],
    pagination: data.pagination,
  };
};

export const getArticleByIdAsync = async (id: number) => {
  const filePath = path.join(process.cwd(), "public", "data", "articles.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(jsonData);
  console.log(data.articles);
  return data.articles.find((article: Article) => article.id === id);
};
