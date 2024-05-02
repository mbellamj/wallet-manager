import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const data = await import("./navigation.json")
      .then((response) => response.data)
      .then((data) =>
        data.map((value) => ({ ...value, text: value.text.toLowerCase() }))
      );
    return NextResponse.json(data);
  } catch (error) {
    console.log("error =", error);
  }
}
