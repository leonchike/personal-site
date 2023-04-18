/*

API route to get resume url

*/

import type { NextApiRequest, NextApiResponse } from "next";
import appData from "./data/main.data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      console.log("Resume API route called");
      res.status(200).json(appData.resume);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
