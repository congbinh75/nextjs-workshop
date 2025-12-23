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
