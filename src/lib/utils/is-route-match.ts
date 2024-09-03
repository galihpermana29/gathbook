/**
 * Checks whether a given pathname starts with any of the routes provided in an array.
 * @example
 * const pathname = "/login";
 * const routes = ["/login", "/register"];
 * const result = isRouteMatch(pathname, routes);
 * console.log(result); // true
 */
export const isRouteMatch = (pathname: string, routes: string[]) =>
  routes.some((route) => pathname.startsWith(route));
