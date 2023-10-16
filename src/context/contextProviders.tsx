"use client";

import GoogleAnalytics from "@/utils/analytics";
import { MDXProvider } from "@mdx-js/react";
import MDXComponentStyles from "@/styles/MDXComponentStyles";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <GoogleAnalytics />
      <MDXProvider components={MDXComponentStyles}>{children}</MDXProvider>
    </>
  );
};

export default AppProviders;
