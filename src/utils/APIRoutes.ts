import { APIRoutes } from "@/types/global";

const API_Routes: APIRoutes = {
  BASE: "/api",
  appData: "/appdata",
  teams: "/teams",
  projects: "/projects",

  getRoute(route) {
    return `${this.BASE}${route}`;
  },
};

export default API_Routes;
