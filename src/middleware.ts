import { NextRequest, NextResponse } from "next/server";

import { adminRoutes, authRoutes } from "./lib/constants";
import { isAdmin } from "./lib/utils/is-admin";
import { isRouteMatch } from "./lib/utils/is-route-match";
import { getServerSession } from "./lib/utils/session";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = getServerSession();

  const isAuthPath = isRouteMatch(pathname, authRoutes);
  const isAdminPath = isRouteMatch(pathname, adminRoutes);

  if (!session) {
    if (!isAuthPath) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
  }

  const sessionIsAdmin = isAdmin(session);
  const fallbackURL = sessionIsAdmin ? "/dashboard" : "/";
  console.log(sessionIsAdmin, fallbackURL, isAdminPath);

  if (isAuthPath) {
    return NextResponse.redirect(new URL(fallbackURL, request.url));
  }

  if (!sessionIsAdmin && isAdminPath) {
    return NextResponse.redirect(new URL(fallbackURL, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
