export async function getIpLocation(ipAddress: string) {
  if (!ipAddress) throw new Error("IP address is required");

  const API_KEY = process.env.IP_GEOLOCATION_API_KEY;
  if (!API_KEY) throw new Error("IP Geolocation API key is not set");

  const API_URL_BASE = "https://api.ipgeolocation.io/ipgeo";

  const url = `${API_URL_BASE}?apiKey=${API_KEY}&ip=${ipAddress}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch IP geolocation data");
  }

  const data = await response.json();

  console.log(data);

  return data;
}
