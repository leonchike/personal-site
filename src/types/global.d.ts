const PageTypes: PageTypes = "teams" | "projects" | "likes";

export interface Item {
  id: string;
  name: string;
  displayName: string;
  displayImage: string;
  thumbnailImage: string;
  alt: string;
  file: string;
  path: string;
  type: PageTypes;
  subTitle: string;
  externalLinks?: {
    name: string;
    url: string;
  }[];
  featured?: boolean;
  abstract?: string;
}

export interface SectionProps {
  sectionTitle: PageTypes;
  path: string;
  data: Item[];
}

export interface Route {
  id?: string;
  name: string;
  path: string;
  pageType?: string;
  footer: boolean;
}

export interface BreadCrumb {
  name: string;
  path: string;
}

export interface PageType {
  [key: string]: string;
}

export interface APIRoutes {
  BASE: string;
  appData: string;
  teams: string;
  projects: string;
  likes: string;
  resume: string;
  homeSections: string;
  categoryData: string;
  pageData: string;
  getRoute(route: string): string;
}

interface SocialLink {
  name: string;
  path: string;
}

interface SectionsInMainData {
  [key: string]: {
    live: boolean;
    subTitle?: string;
  };
}

export interface MainData {
  routes: Route[];
  socialLinks: SocialLink[];
  about: {
    name: string;
    tags: string[];
  };
  sections: SectionsInMainData;
  resume: {
    url: string;
    live: boolean;
  };
}

export interface AppState {
  appData: MainData | null;
  teams: Item[] | null;
  projects: Item[] | null;
  likes: Item[] | null;
}

export interface appReducerAction {
  type: string;
  payload: MainData;
}

export type Category = "teams" | "projects" | "likes";
