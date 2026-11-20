/**
 * Extracts a human-readable error message from an unknown error value.
 */
export function getErrorMessage(error: unknown): string {
  if (typeof error === "string") {
    return error;
  }

  if (error instanceof Error) {
    return error.message;
  }

  if (
    error &&
    typeof error === "object" &&
    "data" in error &&
    error.data &&
    typeof (error as { data: { message?: string } }).data.message === "string"
  ) {
    return (error as { data: { message: string } }).data.message;
  }

  if (error && typeof error === "object" && "message" in error) {
    return String((error as { message: unknown }).message);
  }

  return "An unexpected error occurred. Please try again.";
}
