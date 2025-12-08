export type Article = {
  id: number;
  image: {
    src: string | null | undefined;
    alt: string | null | undefined;
  };
  categories: string[];
  title: string | null | undefined;
  excerpt: string | null | undefined;
}