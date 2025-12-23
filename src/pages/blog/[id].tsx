import { getArticleByIdAsync } from "@/api/articles";
import { ArticleContentType } from "@/constants/enum";
import { Article } from "@/types/article";
import { GetServerSidePropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import Layout from "../layout";

interface BlogProps {
  article: Article;
}

export const Blog = ({ article }: Readonly<BlogProps>) => {
  return (
    <section id="content-wrap" className="blog-single">
      <div className="row">
        <div className="col-twelve">
          <article className="format-standard">
            <div className="content-media">
              <div className="post-thumb">
                <Image
                  src={article.image.src}
                  alt={article.image.alt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>

            <div className="primary-content">
              <h1 className="page-title">{article.title}</h1>

              <ul className="entry-meta">
                <li className="date">{article.date}</li>
                <li className="cat">
                  {article.categories.map((category) => (
                    <Link
                      key={category}
                      href={`/categories/${category.toLowerCase()}`}
                    >
                      {category}
                    </Link>
                  ))}
                </li>
              </ul>

              {article.contents.map((content) => {
                switch (content.type) {
                  case ArticleContentType.LEAD:
                    return (
                      <p key={content.order} className="lead">
                        {content.text}
                      </p>
                    );
                    break;
                  case ArticleContentType.PARAGRAPH:
                    return <p key={content.order}>{content.text}</p>;
                  case ArticleContentType.IMAGE:
                    return (
                      <Image
                        src={content.src}
                        alt={content.alt}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "100%",
                          height: "auto ",
                          objectFit: "cover",
                          marginLeft: "auto",
                        }}
                      />
                    );
                  case ArticleContentType.LARGE_HEADING:
                    return <h2 key={content.order}>{content.text}</h2>;
                  case ArticleContentType.SMALL_HEADING:
                    return <h3 key={content.order}>{content.text}</h3>;
                  case ArticleContentType.QUOTE:
                    return (
                      <blockquote key={content.order}>
                        <p>{content.text}</p>
                      </blockquote>
                    );
                  default:
                    return null;
                }
              })}

              <p className="tags">
                <span>Tagged in :</span>
                {article.tags.map((tag) => (
                  <Link key={tag} href={`/tags/${tag.toLowerCase()}`}>
                    {tag}
                  </Link>
                ))}
              </p>

              <div className="author-profile">
                <Image
                  src={article.author.avatar.src}
                  alt={article.author.avatar.alt}
                  width={100}
                  height={100}
                />

                <div className="about">
                  <h4>
                    <a href="#">{article.author.name}</a>
                  </h4>

                  <p>{article.author.bio}</p>

                  <ul className="author-social">
                    {article.author.socials.map((social) => (
                      <li key={social.platform}>
                        <a href={social.url}>{social.platform}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div className="comments-wrap">
        <div id="comments" className="row">
          <div className="col-full">
            <h3>{article.comments.length} Comments</h3>

            <ol className="commentlist">
              {article.comments.map((comment) => (
                <li key={comment.id} className="depth-1">
                  <div className="avatar">
                    <Image
                      width="50"
                      height="50"
                      className="avatar"
                      src={comment.commentorAvatar.src}
                      alt={comment.commentorAvatar.alt}
                    />
                  </div>

                  <div className="comment-content">
                    <div className="comment-info">
                      <cite>{comment.commentorName}</cite>

                      <div className="comment-meta">
                        <time className="comment-time">{comment.date}</time>
                        <span className="sep">/</span>
                        <a className="reply" href="#">
                          Reply
                        </a>
                      </div>
                    </div>

                    <div className="comment-text">
                      <p>{comment.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="respond">
              <h3>Leave a Comment</h3>

              <form name="contactForm" id="contactForm" method="post" action="">
                <fieldset>
                  <div className="form-field">
                    <input
                      name="cName"
                      type="text"
                      id="cName"
                      className="full-width"
                      placeholder="Your Name"
                      value=""
                    />
                  </div>

                  <div className="form-field">
                    <input
                      name="cEmail"
                      type="text"
                      id="cEmail"
                      className="full-width"
                      placeholder="Your Email"
                      value=""
                    />
                  </div>

                  <div className="form-field">
                    <input
                      name="cWebsite"
                      type="text"
                      id="cWebsite"
                      className="full-width"
                      placeholder="Website"
                      value=""
                    />
                  </div>

                  <div className="message form-field">
                    <textarea
                      name="cMessage"
                      id="cMessage"
                      className="full-width"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button type="submit" className="submit button-primary">
                    Submit
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.params as { id: string };

  const article = await getArticleByIdAsync(parseInt(id));

  return {
    props: { article },
  };
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Blog;
