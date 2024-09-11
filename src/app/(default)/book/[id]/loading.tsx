import { ActionIcon, Button, Skeleton, Title } from "@mantine/core";
import { FaArrowDown, FaArrowUp, FaMoneyBill } from "react-icons/fa";

export default function LoadingBookDetailPage() {
  return (
    <div className="flex w-full flex-col justify-between gap-16">
      <div className="mx-auto flex w-full max-w-[80ch] flex-grow flex-col items-center justify-center gap-12 pt-4 lg:max-w-[100ch] lg:flex-row lg:gap-8 lg:px-16">
        <div className="no-scrollbar container flex w-full items-start justify-evenly gap-4 overflow-x-scroll lg:mx-0 lg:w-auto lg:justify-normal lg:gap-6 lg:overflow-x-visible lg:px-0">
          <div className="hidden flex-col gap-4 pt-9 lg:flex">
            <ActionIcon
              disabled
              variant="default"
              size="lg"
            >
              <FaArrowUp />
            </ActionIcon>
            <ActionIcon
              disabled
              variant="default"
              size="lg"
            >
              <FaArrowDown />
            </ActionIcon>
          </div>
          <div className="relative">
            <Skeleton className="hidden aspect-[4/5] h-96 w-[19.2rem] lg:block" />
          </div>
          <div className="contents lg:hidden">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton
                key={index}
                className="aspect-[4/5] h-96 w-[19.2rem] shrink-0"
              />
            ))}
          </div>
        </div>
        <div className="container flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-5 w-full" />
            </div>
            <Skeleton className="h-48 w-full" />
          </div>
          <Button
            disabled
            leftSection={<FaMoneyBill />}
          >
            Buy Book
          </Button>
        </div>
      </div>
      <div className="rounded-t-3xl bg-mtn-primary-light">
        <div className="container w-full py-12 lg:rounded-t-[3rem]">
          <div className="mx-auto grid grid-rows-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:max-w-[80ch] lg:gap-x-16">
            <div className="order-last flex flex-col gap-2 sm:order-first">
              <Title
                order={2}
                className="text-2xl"
              >
                Table of Contents
              </Title>
              {Array.from({ length: 5 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="h-7 w-full"
                />
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Title
                  order={2}
                  className="text-2xl"
                >
                  Book Synopsis
                </Title>
                <Skeleton className="h-7 w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <Title
                  order={2}
                  className="text-2xl"
                >
                  Author of The Book
                </Title>
                <Skeleton className="h-7 w-full" />
              </div>
              <div className="flex flex-col gap-2">
                <Title
                  order={2}
                  className="text-2xl"
                >
                  Book Price
                </Title>
                <Skeleton className="h-7 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
