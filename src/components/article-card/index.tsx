import { Article } from "@/types/article";
import Image from "next/image";
import Link from "next/link";

export const ArticleCard = ({
  id,
  image,
  categories,
  title,
  excerpt,
}: Article) => {
  return (
    <article className="brick entry animate-this">
      <div className="entry-thumb">
        <Link href={`/posts/${id}`} className="thumb-link">
          <Image
            src={image.src || "/images/sample-image.jpg"}
            alt={image.alt || "Pattern"}
            width={500}
            height={500}
          />
        </Link>
      </div>

      <div className="entry-text">
        <div className="entry-header">
          <div className="entry-meta">
            <span className="cat-links">
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category.toLowerCase()}`}
                >
                  {category}
                </Link>
              ))}
            </span>
          </div>

          <h1 className="entry-title">
            <Link className="font-bold" href={`/posts/${id}`}>
              {title}
            </Link>
          </h1>
        </div>
        <div className="entry-excerpt">{excerpt}</div>
      </div>
    </article>
  );
};
