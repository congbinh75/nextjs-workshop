export type ImageData = {
  src: string;
  alt: string;
};

export type Article = {
  id: number;
  image: ImageData;
  categories: string[];
  title: string;
  excerpt: string;
};
