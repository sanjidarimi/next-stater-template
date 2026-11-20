import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/shared/empty-state";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-125 max-w-md items-center justify-center px-4">
      <EmptyState
        icon={<FileQuestion className="h-6 w-6" />}
        title="Page Not Found"
        description="The page you are looking for does not exist or has been moved."
        action={
          <Button asChild variant="default" size="sm">
            <Link href="/">Back to Home</Link>
          </Button>
        }
      />
    </div>
  );
}
