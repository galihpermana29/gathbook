import { NextRequest, NextResponse } from "next/server";

import { adminRoutes, authRoutes } from "./lib/constants";
import { isAdmin } from "./lib/utils/is-admin";
import { isRouteMatch } from "./lib/utils/is-route-match";
import { getServerSession } from "./lib/utils/session";

/**
 * Middleware function for handling authentication and authorization.
 *
 * - Redirects unauthenticated users from protected routes to the login page.
 * - Redirects authenticated users from login or auth routes to the dashboard or home page based on their role.
 * - Redirects non-admin users from admin routes to the home page.
 *
 * @param {NextRequest} request - The incoming request object.
 */
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await getServerSession();

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

  if (isAuthPath) {
    return NextResponse.redirect(new URL(fallbackURL, request.url));
  }

  if (!sessionIsAdmin && isAdminPath) {
    return NextResponse.redirect(new URL(fallbackURL, request.url));
  }

  return NextResponse.next();
}

/**
 * Configuration object for the middleware.
 *
 * This configuration ensures the middleware is applied to all routes except:
 * - API routes (`api`)
 * - Static files (`_next/static`)
 * - Image optimization files (`_next/image`)
 * - Metadata files (`favicon.ico`, `sitemap.xml`, `robots.txt`)
 */
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
