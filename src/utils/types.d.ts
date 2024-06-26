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
  references: Reference[];
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

type LeadershipData = {
  heading: string;
  subheading: string;
  description: string;
};

export type LeadershipType = {
  sectionStatement: string;
  calendlyLink: string;
  leadershipData: LeadershipData[];
  highlights: string[];
};

export type AboutData = {
  name: string;
  currentPosition: string;
  personalStatement: string;
  summaryStatement: string;
  contactEmail: string;
  contactPhone: string;
  linkedInURL: string;
  contactLocation: string;
  resumeURL: string;
  profilePictureURL: string;
};

type strategyData = {
  heading: string;
  subheading: string;
  description: string;
  longDescription: string;
  images: {
    lg: string;
    sm: string;
  };
};

export type StrategyType = {
  sectionHeading: string;
  sectionStatement: {
    main: string;
    sub: string;
  };
  strategyData: strategyData[];
};

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
