import { getAllArticlesAsync } from "@/api/articles";
import { ArticleCard } from "@/components/article-card";
import { ArticleCardContent } from "@/types/article";
import { PaginationModel } from "@/types/pagination";
import { ReactElement } from "react";
import Layout from "../layout";
import Pagination from "@/components/pagination";

interface DashboardProps {
  articles: ArticleCardContent[];
  pagination: PaginationModel;
}

export default function Dashboard({
  articles,
  pagination,
}: Readonly<DashboardProps>) {
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
}

export async function getServerSideProps() {
  const result = await getAllArticlesAsync();
  const articles = result.articles;
  const pagination = result.pagination;

  return {
    props: { articles, pagination },
  };
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
