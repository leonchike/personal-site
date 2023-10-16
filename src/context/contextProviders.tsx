"use client";

import GoogleAnalytics from "@/utils/analytics";
import { AppProvider } from "@/context/appContext";
import { MDXProvider } from "@mdx-js/react";
import MDXComponentStyles from "@/styles/MDXComponentStyles";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GoogleAnalytics />
      <AppProvider>
        <MDXProvider components={MDXComponentStyles}>{children}</MDXProvider>
      </AppProvider>
    </>
  );
};

export default AppProviders;
