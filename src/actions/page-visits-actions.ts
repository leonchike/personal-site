"use server";

import { getIpLocation } from "@/utils/get-ip-location";
import mongooseClient from "@/lib/mongoose";
import { PageVisit, IPageVisit } from "@/lib/models/page-visit";

interface PageVisit {
  pathname: string;
  timestamp: string;
  ipAddress: string;
  referrer: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
}

export async function logPageVisitServerAction(pageVisit: PageVisit) {
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

  try {
    await mongooseClient;
    const pageVisitDoc = new PageVisit(logData);
    await pageVisitDoc.save();
  } catch (error) {
    console.error("Error logging page visit to MongoDB:", error);
  }

  return null;
}

// export async function getPageVisitsServerAction(
//   page: number,
//   limit: number = 100
// ) {
//   try {
//     await mongooseClient;
//     const pageVisits = await PageVisit.find()
//       .sort({ timestamp: -1 })
//       .skip((page - 1) * limit)
//       .limit(limit + 1)
//       .lean()
//       .exec();

//     const hasMore = pageVisits.length === limit;
//     const visits = hasMore ? pageVisits.slice(0, -1) : pageVisits;

//     const serializedVisits = visits.map((visit) => ({
//       _id: visit._id.toString(),
//       pathname: visit.pathname,
//       timestamp: visit.timestamp.toISOString(),
//       ipAddress: visit.ipAddress,
//       referrer: visit.referrer || null,
//       location: visit.location
//         ? {
//             city: visit.location.city,
//             state_prov: visit.location.state_prov,
//             country: visit.location.country,
//             zipcode: visit.location.zipcode,
//             lat: visit.location.lat,
//             lon: visit.location.lon,
//           }
//         : null,
//       utmSource: visit.utmSource || null,
//       utmMedium: visit.utmMedium || null,
//       utmCampaign: visit.utmCampaign || null,
//     }));

//     return {
//       visits: serializedVisits,
//       hasMore,
//     };
//   } catch (error) {
//     console.error("Error fetching page visits from MongoDB:", error);
//     throw error;
//   }
// }

export async function getPageVisitsServerAction(
  page: number,
  limit: number = 100
) {
  try {
    await mongooseClient;
    const pageVisits = await PageVisit.find()
      .sort({ timestamp: -1 })
      .skip((page - 1) * limit)
      .limit(limit + 1)
      .lean()
      .exec();

    const hasMore = pageVisits.length > limit;
    const slicedVisits = hasMore ? pageVisits.slice(0, -1) : pageVisits;

    const serializedVisits = slicedVisits.map((visit) => ({
      _id: visit._id.toString(),
      pathname: visit.pathname,
      timestamp: visit.timestamp.toISOString(),
      ipAddress: visit.ipAddress,
      referrer: visit.referrer || null,
      location: visit.location
        ? {
            city: visit.location.city,
            state_prov: visit.location.state_prov,
            country: visit.location.country,
            zipcode: visit.location.zipcode,
            lat: visit.location.lat,
            lon: visit.location.lon,
          }
        : null,
      utmSource: visit.utmSource || null,
      utmMedium: visit.utmMedium || null,
      utmCampaign: visit.utmCampaign || null,
    }));

    return {
      visits: serializedVisits,
      hasMore,
    };
  } catch (error) {
    console.error("Error fetching page visits from MongoDB:", error);
    throw error;
  }
}
