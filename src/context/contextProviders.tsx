"use client";

import { useAnalyticsLogger } from "@/hooks/useAnalyticsLogger";

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  useAnalyticsLogger();

  return <>{children}</>;
};

export default AppProviders;
