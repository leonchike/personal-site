import { AppState } from "@/types/global";

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getAllAppRoutes = (state: AppState) => {
  // this function accepts the app state object, goes through all the routes and returns an array of all the routes

  // construct main routes array
  let routesArray: string[] = [];

  // deal with appData routes
  let mainAppRoutes: string[] = [];
  if (!state.appData) {
  }
  if (state.appData) {
    mainAppRoutes = state.appData.routes.map((route) => route.path);
  }
  routesArray = [...routesArray, ...mainAppRoutes];

  return routesArray;
};
