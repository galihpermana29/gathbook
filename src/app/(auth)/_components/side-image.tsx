import { Skeleton } from "@mantine/core";

export const SideImage = () => {
  return (
    <div className="pointer-events-none sticky bottom-0 top-0 hidden size-full max-h-screen grid-rows-3 gap-y-1 overflow-hidden grayscale lg:grid">
      <div className="relative">
        <Skeleton className="size-full rounded-none" />
      </div>
      <div className="relative">
        <Skeleton className="size-full rounded-none" />
      </div>
      <div className="relative">
        <Skeleton className="size-full rounded-none" />
      </div>
    </div>
  );
};
