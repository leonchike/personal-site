// useAnalyticsLogger.ts
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { logPageVisitServerAction } from "@/lib/actions";

export const useAnalyticsLogger = () => {
  const pathname = usePathname();

  useEffect(() => {
    const logPageVisit = async () => {
      try {
        const timestamp = new Date().toISOString();
        const ipAddress = await fetch("https://api.ipify.org?format=json")
          .then((response) => response.json())
          .then((data) => data.ip);

        const pageVisit = { pathname, timestamp, ipAddress };
        logPageVisitServerAction(pageVisit);
      } catch (error) {
        console.error("Error logging page visit:", error);
      }
    };

    logPageVisit();
  }, [pathname]);
};
