/*

API route to get teams data

*/

import type { NextApiRequest, NextApiResponse } from "next";
import teamsData from "./data/teams.data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      res.status(200).json(teamsData);
    } catch (err) {
      res.status(500).json({ error: err });
    }
  }
}
