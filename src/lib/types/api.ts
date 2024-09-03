/**
 * Represents a successful operation result.
 * @template DataType - The type of the data being returned.
 */
export type SuccessResult<DataType> = { data: DataType; success: true };

/**
 * Represents an unsuccessful operation result.
 */
export type ErrorResult = { error: string; success: false };

/**
 * Represents the result of an operation, which can either be successful or unsuccessful.
 * @template DataType - The type of the data in case of a successful result.
 */
export type Result<DataType> = SuccessResult<DataType> | ErrorResult;
