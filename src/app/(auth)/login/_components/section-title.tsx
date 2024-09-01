import { Title } from "@mantine/core";

export const SectionTitle = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <Title
        order={1}
        className="text-6xl font-bold tracking-tighter"
      >
        SIGN IN
      </Title>
      <p className="text-pretty text-md font-light">
        Delve deep into the world of literacy
      </p>
    </div>
  );
};
