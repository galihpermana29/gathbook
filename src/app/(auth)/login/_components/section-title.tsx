import { StyledTitle } from "@/components/styled-title";

export const SectionTitle = () => {
  return (
    <div className="flex w-full flex-col gap-2">
      <StyledTitle
        order={1}
        className="text-4xl font-bold tracking-tighter xs:text-5xl"
      >
        SIGN IN
      </StyledTitle>
      <p className="text-pretty text-md">
        Delve deep into the world of literacy
      </p>
    </div>
  );
};
