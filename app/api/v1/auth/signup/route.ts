import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({message: "hi this the signup api"})
}
