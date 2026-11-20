import * as React from "react";
import { cn } from "@/lib/utils";

interface DashboardSectionProps {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function DashboardSection({
  title,
  description,
  action,
  children,
  className,
}: DashboardSectionProps) {
  return (
    <section className={cn("space-y-4", className)}>
      {(title || description || action) && (
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {title && (
              <h2 className="text-foreground text-lg font-semibold tracking-tight">{title}</h2>
            )}
            {description && <p className="text-muted-foreground text-xs">{description}</p>}
          </div>
          {action && <div className="mt-1 sm:mt-0">{action}</div>}
        </div>
      )}
      {children}
    </section>
  );
}
