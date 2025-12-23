import { getArticlesByCategory } from "@/api/articles";
import { ArticleCard } from "@/components/article-card";
import { Article } from "@/types/article";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import Layout from "../layout";

interface CategoryProps {
  articles: Article[];
}
const Category = ({ articles }: Readonly<CategoryProps>) => {
  return (
    <>
      {articles.map((article) => (
        <ArticleCard key={article.id} {...article} />
      ))}
    </>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { name } = context.params as { name: string };

  const articles = await getArticlesByCategory(name as string);

  return {
    props: { articles },
  };
}

Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Category;
