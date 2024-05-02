import { NextRequest, NextResponse } from "next/server";
import { data } from "./menu.json";

export async function GET(request: NextRequest) {
  return NextResponse.json(data);
}
