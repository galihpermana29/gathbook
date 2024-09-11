import Link from "next/link";

import { ActionIcon, Divider } from "@mantine/core";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

import { Logo } from "./logo";

const socialMedias = [
  {
    label: "TikTok",
    link: "https://tiktok.com",
    icon: <FaTiktok size="0.75rem" />,
  },
  {
    label: "Facebook",
    link: "https://facebook.com",
    icon: <FaFacebook size="0.75rem" />,
  },
  {
    label: "YouTube",
    link: "https://youtube.com",
    icon: <FaYoutube size="0.75rem" />,
  },
];

export const DefaultFooter = () => {
  return (
    <footer className="sticky bottom-0 w-full border-t py-2 text-xs backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 sm:px-[calc((4rem+(100vw-640px))/2)] md:px-[calc((4rem+(100vw-768px))/2)] lg:px-[calc((4rem+(100vw-1024px))/2)] xl:px-[calc((4rem+(100vw-1280px))/2)] 2xl:px-[calc((4rem+(100vw-1536px))/2)] 3xl:px-[calc((4rem+(100vw-1792px))/2)]">
        <div className="space-x-2">
          <span>&copy; 2024</span>
          <Divider
            className="inline"
            orientation="vertical"
          />
          <Logo
            className="inline"
            width={80}
            height="auto"
          />
        </div>
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
