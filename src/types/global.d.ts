export interface Item {
  id: string;
  name: string;
  displayName: string;
  displayImage: string;
  file: string;
  path: string;
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
