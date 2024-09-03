import type { User } from "../types/user";

const adminUser: User = {
  id: 2,
  email: "admin@admin.com",
  name: "Administrator",
};

/**
 * Checks if the provided user is the admin user.
 * @example
 * const user = { id: 2, email: "admin@admin.com", name: "Administrator" };
 * const result = isAdmin(user);
 * console.log(result); // true
 */
export const isAdmin = (user: User) =>
  user.id === adminUser.id &&
  user.email === adminUser.email &&
  user.name === adminUser.name;
