import { NextResponse } from "next/server";

// To handle a GET request to /api/
export async function GET(request: Request) {
  // Do whatever you want
  console.log("fetching app data");
  return NextResponse.json({ data: "hello" }, { status: 200 });
}
