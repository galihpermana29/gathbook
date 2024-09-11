"use client";

import Link from "next/link";

import { Button, ButtonGroup } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";

import { CreateBookPayload, CreateBookPayloadSchema } from "@/lib/types/books";
import { StyledTitle } from "@/components/styled-title";

import { ContentEditor } from "../_components/content-editor";
import { CoverField } from "../_components/cover-field";
import { CreateBookForm } from "./_components/forms/create-book-form";
import { useCreateBook } from "./_hooks/use-create-book";

export default function BookCreatePage() {
  const { mutate: createBook, isPending } = useCreateBook();
  const form = useForm<CreateBookPayload>({
    mode: "uncontrolled",
    validate: zodResolver(CreateBookPayloadSchema),
    validateInputOnChange: true,
  });

  return (
    <form
      onSubmit={form.onSubmit((values) => createBook(values))}
      className="mx-auto flex w-full flex-col items-center gap-4 pb-8 md:gap-16"
    >
      <div className="flex w-full flex-col gap-4 md:w-auto">
        <div className="flex items-center justify-between px-8 sm:px-[calc(((4rem+100vw-640px))/2)] md:px-[calc(((4rem+100vw-768px))/2)] lg:px-[calc(((4rem+100vw-1024px))/2)] xl:px-[calc(((4rem+100vw-1280px))/2)] 2xl:px-[calc(((4rem+100vw-1536px))/2)] 3xl:px-[calc(((4rem+100vw-1792px))/2)]">
          <StyledTitle
            order={3}
            className="text-sm sm:text-3xl md:text-5xl xs:text-xl"
          >
            Create Book
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
              Create
            </Button>
          </ButtonGroup>
        </div>
        <div className="mx-auto grid w-full grid-rows-1 gap-x-12 gap-y-8 px-8 sm:px-[calc(((4rem+100vw-640px))/2)] md:w-fit md:max-w-fit md:grid-cols-2 md:px-[calc(((4rem+100vw-768px))/2)] lg:px-[calc(((4rem+100vw-1024px))/2)] xl:px-[calc(((4rem+100vw-1280px))/2)] 2xl:px-[calc(((4rem+100vw-1536px))/2)] 3xl:px-[calc(((4rem+100vw-1792px))/2)]">
          <CoverField form={form} />
          <CreateBookForm form={form} />
        </div>
      </div>
      <div className="container">
        <ContentEditor form={form} />
      </div>
    </form>
  );
}
