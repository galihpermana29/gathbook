import Link from "next/link";

import {
  Button,
  ButtonGroup,
  FileInput,
  NumberInput,
  Overlay,
  Paper,
  Skeleton,
  Textarea,
  TextInput,
} from "@mantine/core";
import { RichTextEditor, RichTextEditorContent } from "@mantine/tiptap";
import { FaImage, FaTrash } from "react-icons/fa";

import { StyledTitle } from "@/components/styled-title";

import { EditorToolbar } from "../_components/content-editor/editor-toolbar";

export default function LoadingDashboardCreateBook() {
  return (
    <div className="mx-auto flex w-full flex-col items-center gap-4 pb-8 md:gap-16">
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
              disabled
            >
              Cancel
            </Button>
            <Button
              size="xs"
              type="submit"
              disabled
            >
              Create
            </Button>
          </ButtonGroup>
        </div>
        <div className="mx-auto grid w-full grid-rows-1 gap-x-12 gap-y-8 px-8 sm:px-[calc(((4rem+100vw-640px))/2)] md:w-fit md:max-w-fit md:grid-cols-2 md:px-[calc(((4rem+100vw-768px))/2)] lg:px-[calc(((4rem+100vw-1024px))/2)] xl:px-[calc(((4rem+100vw-1280px))/2)] 2xl:px-[calc(((4rem+100vw-1536px))/2)] 3xl:px-[calc(((4rem+100vw-1792px))/2)]">
          <div className="no-scrollbar w-full overflow-x-auto">
            <div className="mx-auto flex w-max items-center justify-center gap-2 pb-3">
              {Array.from({ length: 0 }).map((_, index) => (
                <div
                  key={`cover-${index}`}
                  className="group relative overflow-hidden hover:cursor-pointer"
                >
                  <div className="absolute z-50 grid size-full place-content-center opacity-0 transition-opacity group-hover:opacity-100">
                    <FaTrash
                      color="red"
                      size="2rem"
                    />
                  </div>
                  <Overlay
                    className="z-20 rounded-[var(--mantine-radius-xl)] opacity-0 transition-opacity group-hover:opacity-100"
                    color="#000"
                    backgroundOpacity={0.75}
                  />
                  <Paper
                    className="relative aspect-[4/5] h-96 w-auto shrink-0 overflow-hidden"
                    shadow="sm"
                    withBorder
                  >
                    <Skeleton className="absolute z-0 size-full" />
                  </Paper>
                </div>
              ))}
              <FileInput
                value={null}
                placeholder={
                  <FaImage
                    size="2rem"
                    className="mx-auto opacity-50 transition-colors group-hover:text-mtn-primary-filled-hover"
                  />
                }
                classNames={{
                  input:
                    "h-96 group-hover:border-mtn-primary-filled border-dashed border transition-colors hover:cursor-pointer",
                  root: "relative aspect-[4/5] shrink-0 h-96 w-auto place-content-center overflow-hidden",
                }}
                className="group"
                accept="image/*"
                disabled
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <TextInput
              label="Book Title"
              placeholder="Enter book title here..."
              disabled
            />
            <TextInput
              label="Author"
              placeholder="Enter book's author here..."
              disabled
            />
            <NumberInput
              label="Price"
              prefix="Rp."
              placeholder="Enter book's price here..."
              thousandSeparator="."
              decimalSeparator=","
              min={0}
              disabled
            />
            <Textarea
              label="Synopsis"
              placeholder="Enter book's synopsis here..."
              autosize
              minRows={5}
              maxRows={5}
              classNames={{ input: "px-4 py-3" }}
              disabled
            />
          </div>
        </div>
      </div>
      <div className="container">
        <RichTextEditor
          className="w-full"
          editor={null}
          classNames={{ content: "[&_.ProseMirror]:min-h-[30dvh]" }}
        >
          <EditorToolbar />
          <RichTextEditorContent />
        </RichTextEditor>
      </div>
    </div>
  );
}
