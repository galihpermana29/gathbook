import { getServerSession } from "@/lib/utils/session";
import { StyledTitle } from "@/components/styled-title";

export const HeroSection = async () => {
  const user = await getServerSession();
  return (
    <div className="container flex flex-col items-start justify-center gap-5 text-balance">
      <StyledTitle
        order={1}
        className="max-w-full gap-x-4 overflow-hidden text-ellipsis text-3xl sm:inline-flex sm:text-5xl xs:text-4xl"
      >
        <span className="inline whitespace-nowrap sm:hidden">
          How are you?{" "}
        </span>
        <span className="hidden sm:inline">Hello,</span>
        <br className="block sm:hidden" />{" "}
        <span className="line-clamp-1 text-ellipsis">{user?.name}</span>
      </StyledTitle>
      <p className="text-pretty text-sm xs:max-w-[50ch] xs:text-base">
        Don&apos;t let the story end just yet! Continue reading your last book
        and immerse yourself in the world of literature.
      </p>
    </div>
  );
};
