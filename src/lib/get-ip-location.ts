export async function getIpLocation(ipAddress: string) {
  if (!ipAddress) throw new Error("IP address is required");

  const KEY = "395e687e910c4dee81c82529f176df94";

  const API_URL_BASE = "https://api.ipgeolocation.io/ipgeo";

  const url = `${API_URL_BASE}?apiKey=${KEY}&ip=${ipAddress}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch IP geolocation data");
  }

  const data = await response.json();

  return data;
}
