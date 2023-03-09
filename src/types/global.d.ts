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
  data: Item[];
  sectionTitle: string;
  path: string;
}

export interface Route {
  name: string;
  path: string;
  footer: boolean;
}

export interface BreadCrumb {
  name: string;
  path: string;
}

export interface PageType {
  [key: string]: string;
}
