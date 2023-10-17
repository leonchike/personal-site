import teamsData from "@/data/teams.data";
import projectsData from "@/data/projects.data";
import likesData from "@/data/likes.data";
import appData from "@/data/main.data";
import path from "path";
import { promises as fs } from "fs";

export function getAppData() {
  return appData;
}

export function getHomeSectionData() {
  let data = {
    teams: teamsData,
    projects: projectsData,
    likes: likesData,
  };

  return data;
}

export function getCategoryData(category: string) {
  let data = null;

  switch (category) {
    case "teams":
      data = teamsData;
      break;
    case "projects":
      data = projectsData;
      break;
    case "likes":
      data = likesData;
      break;
    default:
      data = null;
      break;
  }

  return data;
}

export async function getPageData(category: string, page: string) {
  if (!category || !page) {
    return null;
  }

  let data = null;

  const file = path.join(
    process.cwd(),
    "/src/data",
    `${category}`,
    `${page}.mdx`
  );

  switch (category) {
    case "teams":
      data = teamsData.filter((item) => item.id === page);
      break;
    case "projects":
      data = projectsData.filter((item) => item.id === page);
      break;
    case "likes":
      data = likesData.filter((item) => item.id === page);
      break;
    default:
      data = null;
      break;
  }

  try {
    const fileBuffer = await fs.readFile(file, "utf8");
    const fileContents = fileBuffer.toString();

    return { file: fileContents, data: data };
  } catch (err) {
    return { file: "null", data: err };
  }
}
