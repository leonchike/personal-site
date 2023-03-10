/*

API route to get a high level app data

*/

import type { NextApiRequest, NextApiResponse } from "next";
import appData from "./data/main.data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      res.status(200).json(appData);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
