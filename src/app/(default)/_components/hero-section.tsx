import { Title } from "@mantine/core";

import { getServerSession } from "@/lib/utils/session";

export const HeroSection = async () => {
  const user = await getServerSession();
  return (
    <div className="container flex flex-col items-start justify-center gap-5 text-balance">
      <Title
        order={1}
        className="text-pretty text-4xl leading-tight tracking-tighter sm:text-6xl xs:text-5xl"
      >
        <span className="inline sm:hidden">How are you? </span>
        <span className="hidden sm:inline">Hello,</span>
        <br className="block sm:hidden" /> {user?.name}
      </Title>
      <p className="text-sm xs:max-w-[50ch] xs:text-base">
        Don&apos;t let the story end just yet! Continue reading your last book
        and immerse yourself in the world of literature.
      </p>
    </div>
  );
};
