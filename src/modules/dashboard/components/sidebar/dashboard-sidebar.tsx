"use client";

import Link from "next/link";
import { PanelLeftClose, PanelLeft, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { dashboardNavigation } from "../../config/navigation.config";
import { dashboardConfig } from "../../config/dashboard.config";
import { SidebarNavGroup } from "./sidebar-nav-group";
import { useSidebar } from "../../hooks/use-sidebar";

export function DashboardSidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <aside
      className={cn(
        "bg-card hidden shrink-0 flex-col border-r transition-all duration-300 ease-in-out lg:flex",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Brand Header & Top Collapse Button */}
      <div className="flex h-14 items-center justify-between border-b px-3">
        {isCollapsed ? (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  onClick={toggleSidebar}
                  className="bg-primary text-primary-foreground mx-auto flex h-9 w-9 items-center justify-center rounded-lg transition-transform hover:scale-105"
                  aria-label="Expand sidebar"
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent side="right">Expand sidebar (⌘B)</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <>
            <Link
              href="/dashboard"
              className="text-foreground flex items-center gap-2.5 overflow-hidden font-bold tracking-tight"
            >
              <div className="bg-primary text-primary-foreground flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
                <LayoutGrid className="h-4 w-4" />
              </div>
              <span className="truncate text-sm font-bold">{dashboardConfig.appName}</span>
            </Link>

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleSidebar}
                    className="text-muted-foreground hover:text-foreground h-8 w-8"
                    aria-label="Collapse sidebar"
                  >
                    <PanelLeftClose className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">Collapse sidebar (⌘B)</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        )}
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 space-y-4 overflow-y-auto px-2 py-4">
        {dashboardNavigation.map((group) => (
          <SidebarNavGroup key={group.title} group={group} isCollapsed={isCollapsed} />
        ))}
      </div>

      {/* Bottom Footer: Open / Collapse Action Row */}
      <div className="border-t p-2">
        {isCollapsed ? (
          <TooltipProvider delayDuration={0}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleSidebar}
                  className="text-muted-foreground hover:text-foreground mx-auto flex h-9 w-9"
                  aria-label="Expand sidebar"
                >
                  <PanelLeft className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Expand sidebar (⌘B)</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="text-muted-foreground hover:text-foreground w-full justify-start gap-2 text-xs"
          >
            <PanelLeftClose className="h-4 w-4 shrink-0" />
            <span className="truncate">Collapse Sidebar</span>
            <kbd className="bg-muted text-muted-foreground pointer-events-none ml-auto inline-flex h-5 items-center gap-0.5 rounded border px-1.5 font-mono text-[10px] font-medium select-none">
              ⌘B
            </kbd>
          </Button>
        )}
      </div>
    </aside>
  );
}
