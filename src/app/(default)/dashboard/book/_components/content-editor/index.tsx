"use client";

import { Alert } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";
import { Link, RichTextEditor, RichTextEditorContent } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import type { CreateBookPayload } from "@/lib/types/books";
import { cn } from "@/lib/utils/cn";
import { parseHTML } from "@/lib/utils/parse-html";
import { unparseTopicsToHTML } from "@/lib/utils/unparse-topics-to-html";

import { EditorToolbar } from "./editor-toolbar";

export const ContentEditor = ({
  form,
}: {
  form: UseFormReturnType<CreateBookPayload>;
}) => {
  const value = form.getValues();
  const fieldError = form.errors.topics;
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [StarterKit, Link],
    content: unparseTopicsToHTML(value.topics),
    onUpdate: ({ editor }) => {
      const value = editor.getHTML();
      const parsed = parseHTML(value);
      form.setFieldValue("topics", parsed);
    },
  });

  return (
    <div className={cn(fieldError ? "flex w-full flex-col gap-4" : "contents")}>
      {fieldError ? (
        <Alert
          color="red"
          title="Please resolve this error first!"
          classNames={{ body: "px-4" }}
        >
          {fieldError}
        </Alert>
      ) : null}
      <RichTextEditor
        className="w-full"
        editor={editor}
        classNames={{ content: "[&_.ProseMirror]:min-h-[30dvh]" }}
      >
        <EditorToolbar />
        <RichTextEditorContent />
      </RichTextEditor>
    </div>
  );
};
