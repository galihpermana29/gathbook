import { Button, Title } from "@mantine/core";
import { FaExternalLinkAlt } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <div className="container flex h-[calc(85dvh-80px-4rem)] flex-col items-center justify-center gap-8 text-center">
      <div className="flex flex-col items-center gap-5 text-balance text-center">
        <Title
          order={1}
          className="text-pretty text-5xl leading-tight tracking-tighter sm:text-6xl"
        >
          Keep the story going...
        </Title>
        <p className="max-w-[80ch] xl:max-w-[50ch]">
          Don&apos;t let the story end just yet! Continue reading your last book
          and immerse yourself in the world of literature.
        </p>
      </div>
      <Button
        className="px-12"
        rightSection={<FaExternalLinkAlt />}
      >
        Start reading
      </Button>
    </div>
  );
};
