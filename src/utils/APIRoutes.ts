import { APIRoutes } from "@/types/global";

let APIBASE = process.env.API_BASE || "http://localhost:3000/api";

const API_Routes: APIRoutes = {
  BASE: APIBASE,
  appData: "/appdata",
  teams: "/teams",
  projects: "/projects",
  likes: "/likes",
  resume: "/resume",
  homeSections: "/homesections",
  categoryData: "/categorydata",
  pageData: "/pagedata",

  getRoute(route: keyof APIRoutes) {
    return `${this.BASE}${this[route]}`;
  },
};

export default API_Routes;
