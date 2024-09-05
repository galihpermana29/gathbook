import { Title } from "@mantine/core";

export const HeroSection = () => {
  return (
    <div className="container flex h-[calc(50dvh-80px-4rem)] flex-col items-center justify-center gap-5 text-balance text-center">
      <Title
        order={1}
        className="text-pretty text-4xl leading-tight tracking-tighter sm:text-6xl xs:text-5xl"
      >
        Keep the story going...
      </Title>
      <p className="max-w-[40ch] text-sm xs:max-w-[50ch] xs:text-base">
        Don&apos;t let the story end just yet! Continue reading your last book
        and immerse yourself in the world of literature.
      </p>
    </div>
  );
};
