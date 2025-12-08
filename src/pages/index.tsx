import { getAllArticlesAsync } from "@/api/articles";
import { ArticleCard } from "@/components/article-card";
import { Article } from "@/types/article";
import { Montserrat, Roboto } from "next/font/google";
import Layout from "./layout";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export default function Home({ articles }: Readonly<{ articles: Article[] }>) {
  return (
    <div className={`${montserrat.className} ${roboto.className} bg-white`}>
      <Layout>
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </Layout>
    </div>
  );
}

export async function getServerSideProps() {
  const articles = await getAllArticlesAsync();

  return {
    props: { articles },
  };
}
