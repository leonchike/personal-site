import { NextResponse } from "next/server";
import teamsData from "@/data/teams.data";
import projectsData from "@/data/projects.data";
import likesData from "@/data/likes.data";

// To handle a GET request to /api/appdata
export async function GET(request: Request) {
  let data = {
    teams: teamsData,
    projects: projectsData,
    likes: likesData,
  };

  return NextResponse.json({ data }, { status: 200 });
}
