import { getAllArticlesAsync } from "@/api/articles";
import { ArticleCard } from "@/components/article-card";
import { ArticleCardContent } from "@/types/article";
import { ReactElement } from "react";
import Layout from "../layout";

interface DashboardProps {
  articles: ArticleCardContent[];
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
