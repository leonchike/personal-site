import { NextResponse, NextRequest } from "next/server";
import teamsData from "@/data/teams.data";
import projectsData from "@/data/projects.data";
import likesData from "@/data/likes.data";
import path from "path";
import { promises as fs } from "fs";

// To handle a GET request to /api/appdata
export async function GET(request: NextRequest) {
  const requestedCategory = request.nextUrl.searchParams
    .get("category")
    ?.toLowerCase();
  const requestedPage = request.nextUrl.searchParams.get("page");

  if (!requestedCategory || !requestedPage) {
    return NextResponse.next();
  }

  const { file, data } = await getData(requestedCategory, requestedPage);

  return NextResponse.json({ file, data }, { status: 200 });
}

const getData = async (category: string, page: string) => {
  let data = null;
  const file = path.join(
    process.cwd(),
    "/src/data",
    `${category}`,
    `${page}.mdx`
  );

  console.log(
    path.join(process.cwd(), "/src/data", `${category}`, `${page}.mdx`)
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
};
