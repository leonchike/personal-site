"use client";

import { MDXProvider } from "@mdx-js/react";
import MDXComponentStyles from "@/styles/MDXComponentStyles";
import { useAnalyticsLogger } from "@/hooks/useAnalyticsLogger";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  useAnalyticsLogger();

  return (
    <>
      <MDXProvider components={MDXComponentStyles}>{children}</MDXProvider>
    </>
  );
};

export default AppProviders;
