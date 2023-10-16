import { NextResponse } from "next/server";
import appData from "@/data/main.data";

// To handle a GET request to /api/appdata
export async function GET(request: Request) {
  return NextResponse.json({ data: appData }, { status: 200 });
}
