import { Loader } from "@mantine/core";

import { MotionTitle } from "@/components/motion/motion-title";

export default function LoadingDefaultGroup() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center gap-x-9 gap-y-8 text-center sm:flex-row sm:text-left">
      <Loader size="xl" />{" "}
      <div className="flex flex-col gap-2 sm:gap-1">
        <MotionTitle
          order={1}
          initial={{ translateX: -50, opacity: 0 }}
          animate={{ translateX: 0, opacity: 1 }}
          className="hidden text-3xl sm:block"
        >
          LOADING...
        </MotionTitle>
        <MotionTitle
          order={1}
          initial={{ translateY: 20, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          className="text-3xl sm:hidden"
        >
          LOADING...
        </MotionTitle>
        <p className="max-w-64 text-pretty sm:max-w-[80ch]">
          Please wait while we load your content...
        </p>
      </div>
    </div>
  );
}
