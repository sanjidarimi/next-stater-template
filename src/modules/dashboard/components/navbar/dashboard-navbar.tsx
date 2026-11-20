"use client";

import { Menu, PanelLeft, PanelLeftClose } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { DashboardBreadcrumbs } from "../breadcrumbs/dashboard-breadcrumbs";
import { UserNav } from "./user-nav";
import { NotificationsPopover } from "./notifications-popover";
import { useSidebar } from "../../hooks/use-sidebar";

export function DashboardNavbar() {
  const { toggleMobile, toggleSidebar, isCollapsed } = useSidebar();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-30 flex h-14 items-center gap-3 border-b px-4 backdrop-blur sm:px-6">
      {/* Mobile drawer toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={toggleMobile}
        aria-label="Toggle mobile menu"
      >
        <Menu className="h-5 w-5" />
      </Button>

      {/* Desktop sidebar toggle button */}
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hidden h-8 w-8 lg:flex"
              onClick={toggleSidebar}
              aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {isCollapsed ? (
                <PanelLeft className="h-4 w-4" />
              ) : (
                <PanelLeftClose className="h-4 w-4" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            {isCollapsed ? "Expand sidebar (⌘B)" : "Collapse sidebar (⌘B)"}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <div className="flex-1">
        <DashboardBreadcrumbs />
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <NotificationsPopover />
        <UserNav />
      </div>
    </header>
  );
}
