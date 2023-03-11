/*
This file creates the context for the app. It is used to store the app data in a global reducer state.
*/
import React, { useEffect, createContext, useContext, useReducer } from "react";
import { useAppData, useTeams, useProjects } from "@/hooks/useAppData";
import { AppState, appReducerAction } from "@/types/global";

// Create the context
const AppContext = createContext(null);
const AppDispatchContext = createContext(null);

// Create the provider
export function AppProvider({ children }: { children: React.ReactNode }) {
  //@ts-ignore
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { data } = useAppData();
  const { data: teams } = useTeams();
  const { data: projects } = useProjects();
  // Get initial app data
  useEffect(() => {
    //@ts-ignore
    dispatch({ type: "SET_APP_DATA", payload: data });
  }, [data]);

  // Get initial teams data
  useEffect(() => {
    //@ts-ignore
    dispatch({ type: "SET_TEAMS_DATA", payload: teams });
  }, [teams]);

  // Get initial projects data
  useEffect(() => {
    //@ts-ignore
    dispatch({ type: "SET_PROJECTS_DATA", payload: projects });
  }, [projects]);

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

// Create the custom hook
export const useAppState = () => {
  return useContext(AppContext);
};

export const useAboutDispatch = () => {
  return useContext(AppDispatchContext);
};

// Create Reducer
const appReducer = (state: AppState, action: appReducerAction) => {
  switch (action.type) {
    case "SET_APP_DATA":
      return { ...state, appData: action.payload };
    case "SET_TEAMS_DATA":
      return { ...state, teams: action.payload };
    case "SET_PROJECTS_DATA":
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};

// Create the initial state
const initialState: AppState = {
  appData: null,
  teams: null,
  projects: null,
};
