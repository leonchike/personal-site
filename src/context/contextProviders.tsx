"use client";

import { useAnalyticsLogger } from "@/hooks/useAnalyticsLogger";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

if (typeof window !== "undefined") {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  });
}

const AppProviders = ({ children }: { children: React.ReactNode }) => {
  useAnalyticsLogger();

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
};

export default AppProviders;
