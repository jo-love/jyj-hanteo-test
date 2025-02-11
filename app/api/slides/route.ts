import { mockSlides } from "@/lib/constants/mockSlides";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(mockSlides);
}
