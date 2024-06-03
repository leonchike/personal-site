"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const postsDirectory = path.join(process.cwd(), "./src/data/blog");

export async function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return {
      id: slug,
      fullPath,
      fileContents,
      publishDate: matterResult.data.publishDate,
      ...matterResult.data,
    };
  });
  return allPostsData.sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
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
    mdxSource,
  };
}
