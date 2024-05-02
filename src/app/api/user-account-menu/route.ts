import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const data = await import("./menu.json")
      .then((response) => response.data)
      .then((data) =>
        data.map((value) => ({ ...value, title: value.title.toLowerCase() }))
      );
    return NextResponse.json(data);
  } catch (error) {
    console.log("error =", error);
  }
}
