import * as React from "react";
import { FolderOpen } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardEmptyStateProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
  className?: string;
}

export function DashboardEmptyState({
  title = "No data found",
  description = "Get started by adding your first record.",
  icon,
  action,
  className,
}: DashboardEmptyStateProps) {
  return (
    <div
      className={cn(
        "bg-card flex flex-col items-center justify-center rounded-xl border border-dashed p-8 text-center",
        className
      )}
    >
      <div className="bg-muted text-muted-foreground mb-4 flex h-12 w-12 items-center justify-center rounded-full">
        {icon || <FolderOpen className="h-6 w-6" />}
      </div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-1 max-w-sm text-xs">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
