import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageLoaderProps {
  message?: string;
  className?: string;
}

export function PageLoader({ message = "Loading...", className }: PageLoaderProps) {
  return (
    <div
      className={cn(
        "text-muted-foreground flex min-h-75 flex-col items-center justify-center gap-3 p-8",
        className
      )}
      role="status"
      aria-label={message}
    >
      <Loader2 className="text-primary h-8 w-8 animate-spin" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
