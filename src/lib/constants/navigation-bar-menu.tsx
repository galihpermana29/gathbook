import { FaBook, FaBookmark, FaClock, FaCog, FaHome } from "react-icons/fa";

export const navigationBarMenu = [
  { label: "Home", route: "/", icon: <FaHome /> },
  { label: "Books", route: "/books", icon: <FaBook /> },
  { label: "Timer", route: "/timer", icon: <FaClock /> },
  { label: "Bookmarks", route: "/bookmarks", icon: <FaBookmark /> },
  { label: "Settings", route: "/settings", icon: <FaCog /> },
];
