import { z } from "zod";

/**
 * Represents a successful operation result.
 * @template DataType - The type of the data being returned.
 */
export const SuccessResultSchema = <DataType extends z.ZodTypeAny>(
  dataSchema: DataType,
) =>
  z.object({
    data: dataSchema,
    success: z.literal(true),
  });

/** Represents an unsuccessful operation result. */
export type ErrorResult = z.infer<typeof ErrorResultSchema>;
export const ErrorResultSchema = z.object({
  error: z.string(),
  success: z.literal(false),
});

/**
 * Represents the result of an operation, which can either be successful or unsuccessful.
 * @template DataType - The type of the data in case of a successful result.
 */
export const ResultSchema = <DataType extends z.ZodTypeAny>(
  dataSchema: DataType,
) => z.union([SuccessResultSchema(dataSchema), ErrorResultSchema]);
