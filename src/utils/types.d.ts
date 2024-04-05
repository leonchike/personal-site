export type WorkItemType = {
  index: number;
  role: string[];
  company: string | null;
  location: string | null;
  year: number;
  articleTitle: string;
  articleDescription: string;
  visuals: Visual[];
  displayType: string;
  References: Reference[];
};

type Visual = {
  url: string;
  smallurl?: string;
  alt: string;
  mediaType: string;
  description: string | null;
  bgColor?: string;
};

type Reference = {
  url: string;
  title: string;
  description: string;
};
