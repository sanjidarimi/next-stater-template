"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { capitalize } from "@/utils/string";

export function DashboardBreadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment.length > 0);

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-muted-foreground hidden items-center space-x-1.5 text-xs md:flex"
    >
      <Link
        href="/dashboard"
        className="hover:text-foreground flex items-center gap-1 transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only">Home</span>
      </Link>

      {segments.map((segment, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const formattedLabel = capitalize(segment.replace(/-/g, " "));

        return (
          <div key={href} className="flex items-center space-x-1.5">
            <ChevronRight className="text-muted-foreground/50 h-3 w-3" />
            {isLast ? (
              <span className="text-foreground font-medium">{formattedLabel}</span>
            ) : (
              <Link href={href} className="hover:text-foreground transition-colors">
                {formattedLabel}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
