import type { IconBaseProps } from "react-icons";
import { DiGit } from "react-icons/di";

import { cn } from "@/lib/utils/cn";

export const Logo = ({ className, ...props }: IconBaseProps) => {
  return (
    <DiGit
      className={cn(
        "hover:cursor-pointer hover:fill-mtn-primary-filled",
        className,
      )}
      {...props}
    />
  );
};
