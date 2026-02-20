import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.headers.has("Next-Action")) {
    return NextResponse.json(
      { error: "Server actions are not supported" },
      { status: 400 },
    );
  }
  return NextResponse.next();
}
