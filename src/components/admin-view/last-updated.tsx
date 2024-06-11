"use client";

import { useState, useEffect } from "react";
import { formatDistanceToNow } from "date-fns";

export default function RenderLastUpdated({
  lastUpdated,
}: {
  lastUpdated: Date | null;
}) {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    if (lastUpdated === null) {
      return;
    }

    const formatTime = () => {
      const formattedDistance = formatDistanceToNow(lastUpdated, {
        addSuffix: true,
      });
      setFormattedTime(formattedDistance);
    };

    formatTime(); // Initial formatting

    const interval = setInterval(formatTime, 1000); // Update every second

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, [lastUpdated]);

  if (lastUpdated === null) {
    return null;
  }

  return (
    <div className="text-sm text-gray-500 mt-4">
      Last updated: {formattedTime}
    </div>
  );
}
