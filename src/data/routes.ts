import { Route } from "@/types/global";

export const routes: Route[] = [
  { name: "Home", path: "/", footer: false },
  { name: "Teams", path: "/teams", footer: true },
  { name: "Writing", path: "/writing", footer: true },
  { name: "Projects", path: "/projects", footer: true },
  { name: "Likes", path: "/likes", footer: true },
  // { name: "Travel", path: "/travel", footer: true },
];

export const socialLinks = [
  { name: "Twitter", path: "https://twitter.com/leonchike" },
  { name: "GitHub", path: "https://github.com/leonchike" },
  { name: "LinkedIn", path: "https://www.linkedin.com/in/leonchike/" },
];
