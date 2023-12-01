"use client";

import { MDXProvider } from "@mdx-js/react";
import MDXComponentStyles from "@/styles/MDXComponentStyles";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <MDXProvider components={MDXComponentStyles}>{children}</MDXProvider>
    </>
  );
};

export default AppProviders;
