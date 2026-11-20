"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/shared/error-state";
import { getErrorMessage } from "@/utils/error";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Application error boundary caught error:", error);
  }, [error]);

  return (
    <div className="container mx-auto flex min-h-125 max-w-md items-center justify-center px-4">
      <ErrorState title="Application Error" message={getErrorMessage(error)} onRetry={reset} />
    </div>
  );
}
