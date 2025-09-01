import { NextRequest, NextResponse } from "next/server";

const PAGE_PROTECTED_PATHS: string[] = ["/blagues/ajouter-blague"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const method = request.method;

  if (PAGE_PROTECTED_PATHS.some((path) => pathname === path)) {
    const url = request.nextUrl.clone();
    url.pathname = "/non-autorise";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/blagues/ajouter-blague"],
};
