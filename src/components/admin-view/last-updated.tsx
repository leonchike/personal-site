import { formatDistanceToNow } from "date-fns";

export default function RenderLastUpdated({
  lastUpdated,
}: {
  lastUpdated: Date | null;
}) {
  if (lastUpdated === null) {
    return null;
  }

  const formattedTime = formatDistanceToNow(lastUpdated, { addSuffix: true });

  return (
    <div className="text-sm text-gray-500 mt-4">
      Last updated: {formattedTime}
    </div>
  );
}
