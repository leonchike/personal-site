export type WorkItemType = {
  index: number;
  role: string[];
  company: string;
  location: string;
  year: number;
  articleTitle: string;
  articleDescription: string;
  visuals: Visual[];
  displayType: string;
  References: Reference[];
};

type Visual = {
  url: string;
  alt: string;
  mediaType: string;
  description: string;
};

type Reference = {
  url: string;
  title: string;
  description: string;
};
