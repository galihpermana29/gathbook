import Link from "next/link";

import { Button } from "@mantine/core";
import { FaArrowLeft } from "react-icons/fa";

export const BackHomeHeader = () => {
  return (
    <div className="flex w-full justify-start">
      <Button
        component={Link}
        href="/"
        className="group flex items-center gap-2"
        variant="outline"
        leftSection={
          <FaArrowLeft
            className="transition-all group-hover:-translate-x-[0.125rem]"
            size={16}
          />
        }
      >
        Back to home
      </Button>
    </div>
  );
};
