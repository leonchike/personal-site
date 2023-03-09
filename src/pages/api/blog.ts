// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/*

API route to get a single blog data

*/

import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { blogData } from "./blog/blogData";

type Data = {
  file: string;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { page } = req.query;

  // find rebuildee.mdx file in /src/data/blog and return data
  const file = path.join(process.cwd(), "/src/pages/api/blog", `${page}.mdx`);
  const data = blogData.filter((item) => item.id === page);

  try {
    const fileBuffer = await fs.readFile(file, "utf8");
    const fileContents = fileBuffer.toString();

    res.status(200).json({ file: fileContents, data: data });
  } catch (err) {
    res.status(500).json({ file: "null", data: err });
  }
}
