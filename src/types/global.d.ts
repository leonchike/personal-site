export interface Item {
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
