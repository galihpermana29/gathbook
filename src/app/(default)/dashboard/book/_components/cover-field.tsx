import { Alert, FileInput, Loader, Overlay } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";
import { FaImage, FaTrash } from "react-icons/fa";

import type { CreateBookPayload } from "@/lib/types/books";
import { cn } from "@/lib/utils/cn";
import { BookCoverCard } from "@/components/book-cover-card";

import { useUploadFile } from "../_hooks/use-upload-file";

export const CoverField = ({
  form,
}: {
  form: UseFormReturnType<CreateBookPayload>;
}) => {
  const fieldError = form.errors.cover;
  const values = form.getValues();
  const covers = values.cover ?? [];
  const { mutate: uploadFile, isPending } = useUploadFile(covers, form);

  return (
    <div className={cn(fieldError ? "flex w-full flex-col gap-2" : "contents")}>
      {fieldError ? (
        <Alert
          color="red"
          title="Field error!"
          classNames={{ body: "px-4" }}
        >
          {fieldError}
        </Alert>
      ) : null}
      <div className="no-scrollbar w-full overflow-x-auto">
        <div className="mx-auto flex w-max items-center justify-center gap-2 pb-3">
          {covers.map((cover, index) => (
            <div
              key={cover + index}
              className="group relative overflow-hidden hover:cursor-pointer"
              onClick={() =>
                form.setFieldValue(
                  "cover",
                  covers.filter((existingCover) => cover !== existingCover),
                )
              }
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
              <BookCoverCard
                className="shrink-0"
                coverUrl={cover}
                alt={cover}
              />
            </div>
          ))}
          <FileInput
            value={null}
            placeholder={
              isPending ? (
                <Loader className="mx-auto flex w-full justify-center" />
              ) : (
                <FaImage
                  size="2rem"
                  className="mx-auto opacity-50 transition-colors group-hover:text-mtn-primary-filled-hover"
                />
              )
            }
            classNames={{
              input:
                "h-96 group-hover:border-mtn-primary-filled border-dashed border transition-colors hover:cursor-pointer",
              root: "relative aspect-[4/5] shrink-0 h-96 w-auto place-content-center overflow-hidden",
            }}
            className="group"
            accept="image/*"
            onChange={(payload) => {
              if (!payload) return;
              uploadFile(payload);
            }}
          />
        </div>
      </div>
    </div>
  );
};
