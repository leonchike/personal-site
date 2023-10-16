import { NextResponse } from "next/server";
import appData from "@/data/main.data";

// To handle a GET request to /api/appdata
export async function GET() {
  return NextResponse.json({ data: appData }, { status: 200 });
}
