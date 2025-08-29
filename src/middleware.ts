import { NextRequest, NextResponse } from "next/server";

const API_PROTECTED_PATH = /^\/api\/blagues$/;
const PAGE_PROTECTED_PATHS: string[] = ["/blagues/ajouter-blague"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const method = request.method;

  if (API_PROTECTED_PATH.test(pathname) && method !== "GET") {
    return NextResponse.json(
      { error: "Forbidden - Only GET method allowed" },
      { status: 403 }
    );
  }

  if (PAGE_PROTECTED_PATHS.some((path) => pathname === path)) {
    const url = request.nextUrl.clone();
    url.pathname = "/non-autorise";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/blagues", "/blagues/ajouter-blague"],
};
