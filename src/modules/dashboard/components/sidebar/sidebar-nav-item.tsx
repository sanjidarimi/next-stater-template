"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { NavItem } from "../../types/dashboard.types";

interface SidebarNavItemProps {
  item: NavItem;
  isCollapsed: boolean;
  onNavigate?: () => void;
}

export function SidebarNavItem({ item, isCollapsed, onNavigate }: SidebarNavItemProps) {
  const pathname = usePathname();
  const isActive =
    pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));

  const hasChildren = Boolean(item.children && item.children.length > 0);
  const isChildActive = Boolean(
    item.children?.some((child) => pathname === child.href || pathname.startsWith(child.href))
  );

  const [isOpen, setIsOpen] = React.useState<boolean>(isChildActive || isActive);

  const Icon = item.icon;

  if (isCollapsed) {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "mx-auto flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors",
                isActive || isChildActive
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                item.disabled && "pointer-events-none opacity-50"
              )}
            >
              {Icon && <Icon className="h-4 w-4 shrink-0" />}
              <span className="sr-only">{item.label}</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" className="flex items-center gap-2">
            <span>{item.label}</span>
            {item.badge && (
              <Badge variant={item.badgeVariant || "secondary"} className="text-[10px]">
                {item.badge}
              </Badge>
            )}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center">
        <Link
          href={item.href}
          onClick={onNavigate}
          className={cn(
            "flex flex-1 items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            isActive
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            item.disabled && "pointer-events-none opacity-50"
          )}
        >
          {Icon && <Icon className="h-4 w-4 shrink-0" />}
          <span className="truncate">{item.label}</span>
          {item.badge && (
            <Badge
              variant={item.badgeVariant || "secondary"}
              className="ml-auto px-1.5 py-0 text-[10px]"
            >
              {item.badge}
            </Badge>
          )}
        </Link>

        {hasChildren && (
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-muted-foreground hover:text-foreground p-2 transition-transform"
            aria-label="Toggle submenu"
          >
            <ChevronDown
              className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
            />
          </button>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="mt-1 ml-6 space-y-1 border-l pl-3">
          {item.children?.map((child) => {
            const isSubActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className={cn(
                  "block rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
                  isSubActive
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                {child.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
