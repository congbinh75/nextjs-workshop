import { getArticlesByCategory } from "@/api/articles";
import { ArticleCard } from "@/components/article-card";
import { ArticleCardContent } from "@/types/article";
import { GetServerSidePropsContext } from "next";
import { ReactElement } from "react";
import Layout from "../layout";

interface CategoryProps {
  articles: ArticleCardContent[];
}

const Category = ({ articles }: Readonly<CategoryProps>) => {
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

      <div className="row">
        <nav className="pagination">
          <span className="page-numbers prev inactive">Prev</span>
          <span className="page-numbers current">1</span>
          <a href="#" className="page-numbers next">
            Next
          </a>
        </nav>
      </div>
    </section>
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
