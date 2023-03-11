/*

API route to get projects data

*/

import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import projectsData from "./data/projects.data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { page } = req.query;

  if (req.method === "GET") {
    if (!page) {
      try {
        res.status(200).json(projectsData);
      } catch (err) {
        res.status(500).json({ error: err });
      }
    } else if (page) {
      // find mdx file in /src/data/blog and return data
      const file = path.join(
        process.cwd(),
        "/src/pages/api/data/projects",
        `${page}.mdx`
      );
      const data = projectsData.filter((item) => item.id === page);

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
