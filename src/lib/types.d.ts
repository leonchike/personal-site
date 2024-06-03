export interface PostType {
  id: string;
  publishDate: string;
  content: string;
  postMetadata: {
    title: string;
    publishDate: string;
    categories: string[];
    authorId: string;
    heroImage?: string;
    live: boolean;
    excerpt?: string;
  };
  mdxSource: any;
}
