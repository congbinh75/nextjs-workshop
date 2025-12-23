import { getAllArticlesAsync } from "@/api/articles";
import { ArticleCard } from "@/components/article-card";
import { Article } from "@/types/article";
import Layout from "../layout";
import { ReactElement } from "react";

interface DashboardProps {
  articles: Article[];
}

export default function Dashboard({ articles }: Readonly<DashboardProps>) {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const articles = await getAllArticlesAsync();

  return {
    props: { articles },
  };
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
