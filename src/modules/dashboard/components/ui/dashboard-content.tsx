import * as React from "react";
import { cn } from "@/lib/utils";

interface DashboardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardContent({ children, className }: DashboardContentProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl flex-1 space-y-6 p-4 sm:p-6 lg:p-8", className)}>
      {children}
    </div>
  );
}
