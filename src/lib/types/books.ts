import { z } from "zod";

import { SuccessResultSchema } from "./api";

/**
 * Represents a book with detailed information.
 * - `id`: The unique identifier for the book.
 * - `title`: The title of the book.
 * - `author`: The author of the book.
 * - `synopsis`: A brief summary of the book.
 * - `cover`: An array of URLs or paths to the cover images of the book.
 * - `price`: The price of the book, represented as a string.
 * - `buyers`: An array of user IDs who have purchased the book.
 * - `topics`: An array of topics covered in the book.
 *    - `title`: The title of the topic.
 *    - `subTopics`: An array of subtopics under each topic.
 *       - `title`: The title of the subtopic.
 *       - `contents`: An array of content objects for each subtopic.
 *          - `description`: The description of the content within the subtopic.
 */
export type Book = z.infer<typeof BookSchema>;
export const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  synopsis: z.string(),
  cover: z.array(z.string()),
  price: z
    .number()
    .min(0, { message: "Price is required and has to be positive!" }),
  buyers: z.array(z.number()).nullable(),
  topics: z
    .array(
      z.object({
        title: z.string().min(1, { message: "Topics need to have a name!" }),
        subTopics: z
          .array(
            z.object({
              title: z
                .string()
                .min(1, { message: "Subtopics need to have a name!" }),
              contents: z.array(z.object({ description: z.string() })).min(1, {
                message:
                  "Each subtopic must have at least one paragraph of content!",
              }),
            }),
          )
          .refine((subTopics) => subTopics.length > 0, {
            message: "Each topic must have at least one topic!",
          }),
      }),
      { required_error: "Book's topic is required!" },
    )
    .min(1, { message: "You need to have at least one topic!" })
    .refine((topics) => topics.every((topic) => topic.subTopics.length > 0), {
      message: "All topics must have at least one subtopic!",
    }),
});

/** Represents the response from server after getting all available books */
export type GetAllBooksResponse = z.infer<typeof GetAllBooksResponseSchema>;
export const GetAllBooksResponseSchema = SuccessResultSchema(
  z.array(BookSchema),
);

/** Represents the response from server after getting a book with certain `id` */
export type GetBookByIdResponse = z.infer<typeof GetBookByIdResponseSchema>;
export const GetBookByIdResponseSchema = SuccessResultSchema(BookSchema);

/** Represents the payload needed to create a new book */
export type CreateBookPayload = z.infer<typeof CreateBookPayloadSchema>;
export const CreateBookPayloadSchema = BookSchema.omit({
  id: true,
  buyers: true,
});

/** Represents the response from server after creating a book */
export type CreateBookResponse = z.infer<typeof CreateBookResponseSchema>;
export const CreateBookResponseSchema = SuccessResultSchema(
  BookSchema.shape.id,
);

/** Represents the payload needed to update a book's information */
export type UpdateBookPayload = z.infer<typeof UpdateBookPayloadSchema>;
export const UpdateBookPayloadSchema = BookSchema.omit({
  id: true,
  buyers: true,
});

/** Represents the response from server after updating a book's information */
export type UpdateBookResponse = z.infer<typeof UpdateBookResponseSchema>;
export const UpdateBookResponseSchema = SuccessResultSchema(
  BookSchema.shape.id,
);

/** Represents the payload needed to buy a book */
export type BuyBookPayload = z.infer<typeof BuyBookPayloadSchema>;
export const BuyBookPayloadSchema = z.object({ book_id: BookSchema.shape.id });

/** Represents the response from server after buying a book */
export type BuyBookResponse = z.infer<typeof BuyBookResponseSchema>;
export const BuyBookResponseSchema = SuccessResultSchema(BookSchema.shape.id);
