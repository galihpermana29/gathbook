import { NumberInput, Textarea, TextInput } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";

import type { CreateBookPayload } from "@/lib/types/books";

export const EditBookForm = ({
  form,
}: {
  form: UseFormReturnType<CreateBookPayload>;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <TextInput
        label="Book Title"
        placeholder="Enter book title here..."
        key={form.key("title")}
        {...form.getInputProps("title")}
      />
      <TextInput
        label="Author"
        placeholder="Enter book's author here..."
        key={form.key("author")}
        {...form.getInputProps("author")}
      />
      <NumberInput
        label="Price"
        prefix="Rp."
        placeholder="Enter book's price here..."
        thousandSeparator="."
        decimalSeparator=","
        min={0}
        key={form.key("price")}
        {...form.getInputProps("price")}
      />
      <Textarea
        label="Synopsis"
        placeholder="Enter book's synopsis here..."
        autosize
        minRows={5}
        maxRows={5}
        classNames={{ input: "px-4 py-3" }}
        key={form.key("synopsis")}
        {...form.getInputProps("synopsis")}
      />
    </div>
  );
};
