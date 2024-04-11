"use client";
import { getPageVisitsServerAction } from "@/actions/page-visits-actions";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import { knownIps } from "@/data/known-ip-addresses";

interface PageVisitInterface {
  _id: string;
  timestamp: string;
  ipAddress: string;
  location: {
    city: string;
    state_prov: string;
    country: string;
    zipcode: string;
    lat: number;
    lon: number;
  } | null;
  pathname: string;
}

const fetcher = async (url: string) => {
  const [_, page, limit] = url.split("/");
  const { visits, hasMore } = await getPageVisitsServerAction(
    parseInt(page),
    parseInt(limit)
  );
  return { visits, hasMore };
};

export default function AdminView() {
  const limit = 100;
  const { data, error, size, setSize } = useSWRInfinite(
    (index) => `/api/page-visits/${index + 1}/${limit}`,
    fetcher
  );

  const pageVisits = data ? data.flatMap((data) => data.visits) : [];
  const isLoading = !data && !error;
  const hasMore = data && data[data.length - 1].hasMore;

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  return (
    <div className="min-h-screen flex justify-center">
      <div className="max-w-5xl m-auto mt-8">
        <h1 className="text-3xl font-medium mb-6">Admin Log View</h1>
        <table className="w-full max-w-4xl bg-white shadow-md rounded-sm overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700 text-left">
              <th className="py-3 pt-4 px-4">Timestamp</th>
              <th className="py-3 px-4">IP Address</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Pathname</th>
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
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )
        )}
      </div>
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
    </tr>
  );
}
