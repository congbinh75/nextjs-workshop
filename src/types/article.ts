import { ArticleContentType, SocialPlatform } from "@/constants/enum";

export type ImageData = {
  src: string;
  alt: string;
};

export type AuthorData = {
  name: string;
  avatar: ImageData;
  bio: string;
  socials: [
    {
      platform: SocialPlatform;
      url: string;
    }
  ];
};

export type CommentData = {
  id: number;
  commentorAvatar: ImageData;
  commentorName: string;
  date: string;
  content: string;
}

export type ArticleCardContent = {
  id: number;
  image: ImageData;
  categories: string[];
  title: string;
  excerpt: string;
};

type ArticleContent =
  | ArticleContentLead
  | ArticleContentParagraph
  | ArticleContentImage
  | ArticleContentQuote
  | ArticleContentLargeHeading
  | ArticleContentSmallHeading;

export type ArticleContentLead = {
  order: number;
  type: ArticleContentType.LEAD;
  text: string;
};

export type ArticleContentParagraph = {
  order: number;
  type: ArticleContentType.PARAGRAPH;
  text: string;
};

export type ArticleContentImage = {
  order: number;
  type: ArticleContentType.IMAGE;
  src: string;
  alt: string;
};

export type ArticleContentLargeHeading = {
  order: number;
  type: ArticleContentType.LARGE_HEADING;
  text: string;
};

export type ArticleContentSmallHeading = {
  order: number;
  type: ArticleContentType.SMALL_HEADING;
  text: string;
};

export type ArticleContentQuote = {
  order: number;
  type: ArticleContentType.QUOTE;
  text: string;
};

export type Article = {
  id: number;
  image: ImageData;
  date: string;
  categories: string[];
  tags: string[];
  title: string;
  contents: ArticleContent[];
  author: AuthorData;
  comments: CommentData[];
};
