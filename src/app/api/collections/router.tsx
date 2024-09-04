import { type NextRequest, NextResponse } from "next/server";
import { OpenSeaSDK, Chain } from "opensea-js";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token");
  return NextResponse.json({ token });
}
