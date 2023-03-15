/*

API route to get likes data

*/

import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import likesData from "./data/likes.data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page } = req.query;

  if (req.method === "GET") {
    if (!page) {
      try {
        res.status(200).json(likesData);
      } catch (err) {
        res.status(500).json({ error: err });
        console.log(err);
      }
    } else if (page) {
      // find mdx file in /src/data/likes and return data
      const file = path.join(
        process.cwd(),
        "/src/pages/api/data/likes",
        `${page}.mdx`
      );
      const data = likesData.filter((item) => item.id === page);

      try {
        const fileBuffer = await fs.readFile(file, "utf8");
        const fileContents = fileBuffer.toString();

        res.status(200).json({ file: fileContents, data: data });
      } catch (err) {
        res.status(500).json({ file: "null", data: err });
      }
    } else {
      res.status(404).json({ error: "Not found" });
      console.log("Not found");
    }
  }
}
