// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";

type Data = {
  file: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // find rebuildee.mdx file in /src/data/blog and return data
  const file = path.join(process.cwd(), "/src/pages/api/blog", "rebuildee.mdx");

  const fileContents = await fs.readFile(file, "utf8");

  // console.log(file);
  // console.log(fileContents);

  res.status(200).json({ file: fileContents });
}
