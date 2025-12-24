import { getArticlesByCategory } from "@/api/articles";
import { ArticleCard } from "@/components/article-card";
import { ArticleCardContent } from "@/types/article";
import { PaginationModel } from "@/types/pagination";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import Layout from "../layout";
import Pagination from "@/components/pagination";

interface CategoryProps {
  articles: ArticleCardContent[];
  pagination: PaginationModel;
}

const Category = ({ articles, pagination }: Readonly<CategoryProps>) => {
  return (
    <section id="bricks">
      <div className="row masonry">
        <div className="bricks-wrapper">
          <div className="grid-sizer"></div>
          {articles.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </div>
      </div>

      <Pagination pagination={pagination} />
    </section>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { name } = context.params as { name: string };
  const result = await getArticlesByCategory(name as string);
  const articles = result.articles;
  const pagination = result.pagination;

  return {
    props: { articles, pagination },
  };
}

Category.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Category;
