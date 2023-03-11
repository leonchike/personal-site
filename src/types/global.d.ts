export interface Item {
  id: string;
  name: string;
  displayName: string;
  displayImage: string;
  thumbnailImage: string;
  file: string;
  path: string;
  type: string;
  subTitle: string;
  externalLinks: {
    name: string;
    url: string;
  }[];
}

export interface SectionProps {
  sectionTitle: "teams" | "projects";
  path: string;
}

export interface Route {
  id: string;
  name: string;
  path: string;
  pageType: string;
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
  getRoute(route: string): string;
}

interface SocialLink {
  name: string;
  path: string;
}

export interface MainData {
  routes: Route[];
  socialLinks: SocialLink[];
  about: {
    name: string;
    tags: string[];
  };
  sections: {
    teams: {
      live: boolean;
    };
    projects: {
      live: boolean;
    };
  };
}

export interface AppState {
  appData: MainData | null;
  teams: Item[] | null;
  projects: Item[] | null;
}

export interface appReducerAction {
  type: string;
  payload: MainData;
}
