"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { PostType } from "@/utils/types";

const postsDirectory = path.join(process.cwd(), "./src/data/blog");

export async function getSortedPostsData(filter?: string) {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    if (!matterResult.data.live || !matterResult.data.publishDate) {
      return;
    }

    return {
      id: slug,
      publishDate: matterResult.data.publishDate as string,
      content: matterResult.data.content as string,
      postMetadata: matterResult.data,
      mdxSource: null, // This will be populated in the getPost function when the mdx content is needed
    };
  });
  return allPostsData
    .sort((a, b) => ((a?.publishDate ?? "") < (b?.publishDate ?? "") ? 1 : -1))
    .filter(Boolean) as PostType[];
}

export async function getPost(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content, data } = matter(fileContents);

  const mdxSource = await serialize(content);

  return {
    id: slug,
    publishDate: data.publishDate,
    content,
    postMetadata: data,
    mdxSource,
  } as PostType;
}
