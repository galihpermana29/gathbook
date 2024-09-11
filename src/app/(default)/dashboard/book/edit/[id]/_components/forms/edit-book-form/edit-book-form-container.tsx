"use client";

import Link from "next/link";

import { Button, ButtonGroup } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";

import {
  UpdateBookPayloadSchema,
  type Book,
  type GetBookByIdResponse,
  type UpdateBookPayload,
} from "@/lib/types/books";
import { StyledTitle } from "@/components/styled-title";
import { ContentEditor } from "@/app/(default)/dashboard/book/_components/content-editor";
import { CoverField } from "@/app/(default)/dashboard/book/_components/cover-field";

import { EditBookForm } from ".";
import { useEditBook } from "../../../_hooks/use-edit-book";

export const EditBookFormContainer = ({
  id,
  initials,
}: {
  id: Book["id"];
  initials: GetBookByIdResponse["data"];
}) => {
  const { mutate: editBook, isPending } = useEditBook(id);
  const form = useForm<UpdateBookPayload>({
    mode: "uncontrolled",
    validate: zodResolver(UpdateBookPayloadSchema),
    validateInputOnChange: true,
    initialValues: {
      author: initials?.author ?? "",
      cover: initials?.cover ?? [],
      price: Number(initials?.price ?? 0),
      synopsis: initials?.synopsis ?? "",
      title: initials?.title ?? "",
      topics: initials?.topics ?? [],
    },
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => editBook(values))}
      className="mx-auto flex w-full flex-col items-center gap-4 pb-8 md:gap-16"
    >
      <div className="flex w-full flex-col gap-4 md:w-auto">
        <div className="flex items-center justify-between px-8 sm:px-[calc(((4rem+100vw-640px))/2)] md:px-[calc(((4rem+100vw-768px))/2)] lg:px-[calc(((4rem+100vw-1024px))/2)] xl:px-[calc(((4rem+100vw-1280px))/2)] 2xl:px-[calc(((4rem+100vw-1536px))/2)] 3xl:px-[calc(((4rem+100vw-1792px))/2)]">
          <StyledTitle
            order={3}
            className="text-sm sm:text-3xl md:text-5xl xs:text-xl"
          >
            Edit Book
          </StyledTitle>
          <ButtonGroup>
            <Button
              component={Link}
              href="/dashboard"
              variant="default"
              size="xs"
              disabled={isPending}
            >
              Cancel
            </Button>
            <Button
              size="xs"
              type="submit"
              loading={isPending}
            >
              Edit
            </Button>
          </ButtonGroup>
        </div>
        <div className="mx-auto grid w-full grid-rows-1 gap-x-12 gap-y-8 px-8 sm:px-[calc(((4rem+100vw-640px))/2)] md:w-fit md:max-w-fit md:grid-cols-2 md:px-[calc(((4rem+100vw-768px))/2)] lg:px-[calc(((4rem+100vw-1024px))/2)] xl:px-[calc(((4rem+100vw-1280px))/2)] 2xl:px-[calc(((4rem+100vw-1536px))/2)] 3xl:px-[calc(((4rem+100vw-1792px))/2)]">
          <CoverField form={form} />
          <EditBookForm form={form} />
        </div>
      </div>
      <div className="container">
        <ContentEditor form={form} />
      </div>
    </form>
  );
};
