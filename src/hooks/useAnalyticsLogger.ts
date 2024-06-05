import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { logPageVisitServerAction } from "@/actions/page-visits-actions";

export const useAnalyticsLogger = () => {
  const pathname = usePathname();

  useEffect(() => {
    const logPageVisit = async () => {
      if (!!localStorage.getItem("leonchike_analytics_blocker")) return;

      if (
        process.env.NODE_ENV === "development" ||
        pathname === "/auth/signin" ||
        pathname === "/admin"
      ) {
        return;
      }

      try {
        const timestamp = new Date().toISOString();
        const referrer = document.referrer || null; // Get the referrer URL
        const ipAddress = await fetch("https://api.ipify.org?format=json")
          .then((response) => response.json())
          .then((data) => data.ip);

        const { utmSource, utmMedium, utmCampaign } = getCustomTracking();

        const pageVisit = {
          pathname,
          timestamp,
          ipAddress,
          referrer,
          utmSource,
          utmMedium,
          utmCampaign,
        };
        logPageVisitServerAction(pageVisit);
      } catch (error) {
        console.error("Error logging page visit:", error);
      }
    };

    logPageVisit();
  }, [pathname]);
};

function getCustomTracking() {
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || null;
  const utmMedium = urlParams.get("utm_medium") || null;
  const utmCampaign = urlParams.get("utm_campaign") || null;

  return { utmSource, utmMedium, utmCampaign };
}
