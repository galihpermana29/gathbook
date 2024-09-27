import { NumberInput, Textarea, TextInput } from "@mantine/core";
import type { UseFormReturnType } from "@mantine/form";

import type { CreateBookPayload } from "@/lib/types/books";

export const CreateBookForm = ({
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
      <TextInput
        label="Author Address"
        placeholder="Enter author address here..."
        key={form.key("address")}
        {...form.getInputProps("address")}
      />
      <NumberInput
        label="Total Supply"
        placeholder="Enter book's supply here..."
        thousandSeparator="."
        decimalSeparator=","
        min={0}
        key={form.key("supply")}
        {...form.getInputProps("supply")}
      />
      <NumberInput
        label="Price"
        prefix="BTT."
        placeholder="Enter book's price here..."
        thousandSeparator="."
        decimalSeparator=","
        min={0}
        key={form.key("price")}
        {...form.getInputProps("price")}
      />
      <NumberInput
        label="Initial Royalty"
        placeholder="1-100%..."
        thousandSeparator="."
        decimalSeparator=","
        min={0}
        max={100}
        key={form.key("inor")}
        {...form.getInputProps("inor")}
      />
      <NumberInput
        label="Resale Royalty"
        placeholder="1-100%..."
        thousandSeparator="."
        decimalSeparator=","
        min={0}
        max={100}
        key={form.key("renor")}
        {...form.getInputProps("renor")}
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
