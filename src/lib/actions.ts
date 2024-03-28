"use server";

import { Logger } from "next-axiom";
import { getIpLocation } from "@/lib/get-ip-location";

interface PageVisit {
  pathname: string;
  timestamp: string;
  ipAddress: string;
}

export async function logPageVisitServerAction(pageVisit: PageVisit) {
  const log = new Logger();
  let location = null;

  try {
    const data = await getIpLocation(pageVisit.ipAddress);

    location = {
      city: data?.city,
      state_prov: data?.state_prov,
      country: data?.country_name,
      zipcode: data?.zipcode,
      lat: data?.latitude,
      lon: data?.longitude,
    };
  } catch (error) {
    console.error("Error fetching IP location:", error);
  }

  const logData = {
    ...pageVisit,
    location,
  };

  log.info("page-visit-to-leonchike.me", logData);
  console.log(logData);

  return null;
}
