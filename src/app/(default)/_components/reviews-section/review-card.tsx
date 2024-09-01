import { Avatar, Paper, Title } from "@mantine/core";

export const ReviewCard = ({
  reviewer,
  reviewerDescription,
  review,
}: {
  reviewer: string;
  reviewerDescription: string;
  review: string;
}) => {
  return (
    <div className="flex w-max flex-col items-center gap-x-12 gap-y-8 md:flex-row">
      <Paper
        className="h-56 w-full shrink-0 md:size-56"
        shadow="sm"
        withBorder
      />
      <div className="flex max-w-[75vw] flex-col gap-4">
        <div className="flex items-center gap-4">
          <Avatar size="lg" />
          <div className="flex flex-col">
            <Title
              order={2}
              className="line-clamp-1 text-pretty text-xl font-semibold tracking-tight sm:text-3xl xs:text-2xl"
            >
              {reviewer}
            </Title>
            <span className="text-sm font-light">{reviewerDescription}</span>
          </div>
        </div>
        <i className="line-clamp-5 max-w-[40ch]">{review}</i>
      </div>
    </div>
  );
};
