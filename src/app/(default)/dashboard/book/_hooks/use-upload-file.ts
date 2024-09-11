"use client";

import { uploadFile } from "@/server/actions/files";
import type { UseFormReturnType } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import type { CreateBookPayload } from "@/lib/types/books";

export const useUploadFile = (
  covers: string[],
  form: UseFormReturnType<CreateBookPayload>,
) => {
  return useMutation({
    mutationKey: ["upload"],
    mutationFn: (file: File) => {
      const formData = new FormData();
      formData.append("images", file);
      return uploadFile(formData);
    },
    onError: ({ message }) => toast.error(message),
    onSuccess: (data) => form.setFieldValue("cover", [...covers, ...data]),
  });
};
