"use client";
import { getPageVisitsServerAction } from "@/actions/page-visits-actions";
import { useState, useEffect } from "react";
import useSWRInfinite from "swr/infinite";
import { knownIps } from "@/data/known-ip-addresses";
import SignOut from "@/components/admin-view/sign-out";

interface PageVisitInterface {
  _id: string;
  timestamp: string;
  ipAddress: string;
  referrer: string | null;
  location: {
    city: string;
    state_prov: string;
    country: string;
    zipcode: string;
    lat: number;
    lon: number;
  } | null;
  pathname: string;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
}

const fetcher = async (page: number, limit: number) => {
  const { visits, hasMore } = await getPageVisitsServerAction(page, limit);
  return { visits, hasMore };
};

export default function AdminView() {
  const [lastUpdated, setLastUpdated] = useState<null | Date>(null);
  const limit = 100;

  const { data, error, size, setSize } = useSWRInfinite(
    (index) => [index + 1, limit],
    fetcher
  );

  const pageVisits = data ? data.flatMap((pageData) => pageData.visits) : [];
  const isLoading = !data && !error;
  const hasMore = data && data[data.length - 1].hasMore;

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  useEffect(() => {
    if (data) {
      const lastFetched = new Date();
      setLastUpdated(lastFetched);
    }
  }, [data]);

  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-[100rem] px-4 m-auto mt-8">
        <Header />
        <div className="mb-6">
          <RenderLastUpdated lastUpdated={lastUpdated} />
        </div>
        <table className="w-full max-w-8xl bg-white shadow-md rounded-sm overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left text-sm">
              <th className="py-3 pt-4 px-4 font-medium">Timestamp</th>
              <th className="py-3 px-4 font-medium">IP Address</th>
              <th className="py-3 px-4 font-medium">Location</th>
              <th className="py-3 px-4 font-medium">Pathname</th>
              <th className="py-3 px-4 font-medium">Referrer</th>
              <th className="py-3 px-4 font-medium">UTM Source</th>
              <th className="py-3 px-4 font-medium">UTM Medium</th>
              <th className="py-3 px-4 font-medium">UTM Campaign</th>
            </tr>
          </thead>
          <tbody>
            {pageVisits.map((visit) => (
              <PageVisitRow key={visit._id} visit={visit} />
            ))}
          </tbody>
        </table>
        {isLoading ? (
          <p className="mt-4">Loading...</p>
        ) : (
          hasMore && (
            <div className="pb-8 pt-4">
              <button
                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="flex justify-between items-start">
      <h1 className="text-3xl font-medium mb-6">Admin Log View</h1>
      <SignOut />
    </div>
  );
}

function PageVisitRow({ visit }: { visit: PageVisitInterface }) {
  function isKnownIp(ipAddress: string) {
    return knownIps.includes(ipAddress);
  }

  const ipAddressStyles = `py-3 px-4 ${
    !isKnownIp(visit.ipAddress) ? "text-green-500" : ""
  }`;

  return (
    <tr key={visit._id} className="text-sm">
      <td className="py-3 px-4">
        {new Date(visit.timestamp).toLocaleString()}
      </td>
      <td className={ipAddressStyles}>{visit.ipAddress}</td>
      <td className="py-3 px-4">
        {visit.location
          ? `${visit.location.city}, ${visit.location.country}`
          : "-"}
      </td>
      <td className="py-3 px-4">{visit.pathname}</td>
      <td className="py-3 px-4">
        {getDomainFromReferrer(visit.referrer) || "-"}
      </td>
      <td className="py-3 px-4">{visit.utmSource || "-"}</td>
      <td className="py-3 px-4">{visit.utmMedium || "-"}</td>
      <td className="py-3 px-4">{visit.utmCampaign || "-"}</td>
    </tr>
  );
}

function RenderLastUpdated({ lastUpdated }: { lastUpdated: Date | null }) {
  if (lastUpdated === null) {
    return null;
  }

  return (
    <div className="text-sm text-gray-500 mt-4">
      Last updated: {lastUpdated.toLocaleString()}
    </div>
  );
}

function getDomainFromReferrer(referrer: string | null) {
  if (!referrer) return null;

  const url = new URL(referrer);
  return url.hostname;
}
