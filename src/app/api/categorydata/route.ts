import { NextResponse, NextRequest } from "next/server";
import teamsData from "@/data/teams.data";
import projectsData from "@/data/projects.data";
import likesData from "@/data/likes.data";

// To handle a GET request to /api/appdata
export async function GET(request: NextRequest) {
  let data = null;
  const requestedCategory = request.nextUrl.searchParams
    .get("category")
    ?.toLowerCase();

  switch (requestedCategory) {
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

  return NextResponse.json({ data }, { status: 200 });
}
