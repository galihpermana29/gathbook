import Link from "next/link";

import { ActionIcon } from "@mantine/core";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

const socialMedias = [
  { link: "https://tiktok.com", icon: <FaTiktok size="0.75rem" /> },
  { link: "https://facebook.com", icon: <FaFacebook size="0.75rem" /> },
  { link: "https://youtube.com", icon: <FaYoutube size="0.75rem" /> },
];

export const DefaultFooter = () => {
  return (
    <footer className="container sticky bottom-0 w-full border-t py-2 text-xs backdrop-blur-sm">
      <div className="flex items-center justify-between">
        &copy; 2024 | Gathbook
        <div className="flex items-center gap-2">
          {socialMedias.map(({ link, icon }) => (
            <ActionIcon
              key={link}
              component={Link}
              href={link}
              variant="default"
              size="sm"
            >
              {icon}
            </ActionIcon>
          ))}
        </div>
      </div>
    </footer>
  );
};
