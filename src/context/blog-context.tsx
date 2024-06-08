"use client";

import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { PostType } from "@/utils/types";

type State = {
  posts: PostType[];
  filters: string[];
  currentFilter: string;
};

type Action =
  | { type: "SET_POSTS"; posts: PostType[] }
  | { type: "SET_FILTERS"; filters: string[] }
  | { type: "SET_CURRENT_FILTER"; currentFilter: string };

const BlogContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

const blogReducer = (draft: State, action: Action) => {
  switch (action.type) {
    case "SET_POSTS":
      draft.posts = action.posts;
      break;
    case "SET_FILTERS":
      draft.filters = action.filters;
      break;
    case "SET_CURRENT_FILTER":
      draft.currentFilter = action.currentFilter;
      break;
    default:
      break;
  }
};

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useImmerReducer(blogReducer, {
    posts: [],
    filters: [],
    currentFilter: "",
  });

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error("useBlog must be used within a BlogProvider");
  }
  return context;
};
