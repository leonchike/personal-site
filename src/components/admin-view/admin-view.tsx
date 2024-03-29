"use client";
import { useState, useEffect } from "react";
import { getPageVisitsServerAction } from "@/lib/actions";

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

export default function AdminView() {
  const [pageVisits, setPageVisits] = useState([] as PageVisitInterface[]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const limit = 100;

  useEffect(() => {
    const fetchPageVisits = async () => {
      setIsLoading(true);
      try {
        const { visits, hasMore } = await getPageVisitsServerAction(
          page,
          limit
        );
        setPageVisits((prevVisits) => [...prevVisits, ...visits]);
        setHasMore(hasMore);
      } catch (error) {
        console.error("Error fetching page visits:", error);
      }
      setIsLoading(false);
    };

    fetchPageVisits();
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-5xl m-auto mt-8">
        <h1 className="text-3xl font-medium mb-6">Admin Log View</h1>
        <table className="w-full max-w-4xl bg-white shadow-md rounded-sm overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 pt-4 px-4">Timestamp</th>
              <th className="py-3 px-4">IP Address</th>
              <th className="py-3 px-4">Location</th>
              <th className="py-3 px-4">Pathname</th>
            </tr>
          </thead>
          <tbody>
            {pageVisits.map((visit) => (
              <tr key={visit._id}>
                <td className="py-3 px-4">
                  {new Date(visit.timestamp).toLocaleString()}
                </td>
                <td className="py-3 px-4">{visit.ipAddress}</td>
                <td className="py-3 px-4">
                  {visit.location
                    ? `${visit.location.city}, ${visit.location.country}`
                    : "-"}
                </td>
                <td className="py-3 px-4">{visit.pathname}</td>
              </tr>
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
