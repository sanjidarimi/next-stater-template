"use client";

import Link from "next/link";
import { LayoutGrid } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { dashboardNavigation } from "../../config/navigation.config";
import { dashboardConfig } from "../../config/dashboard.config";
import { SidebarNavGroup } from "../sidebar/sidebar-nav-group";
import { useSidebar } from "../../hooks/use-sidebar";

export function DashboardMobileNavigation() {
  const { isMobileOpen, setMobileOpen } = useSidebar();

  return (
    <Sheet open={isMobileOpen} onOpenChange={setMobileOpen}>
      <SheetContent side="left" className="flex w-72 flex-col p-0">
        <SheetHeader className="border-b p-4">
          <SheetTitle asChild>
            <Link
              href="/dashboard"
              onClick={() => setMobileOpen(false)}
              className="text-foreground flex items-center gap-2 font-bold"
            >
              <div className="bg-primary text-primary-foreground flex h-8 w-8 items-center justify-center rounded-lg">
                <LayoutGrid className="h-4 w-4" />
              </div>
              <span>{dashboardConfig.appName}</span>
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {dashboardNavigation.map((group) => (
            <SidebarNavGroup
              key={group.title}
              group={group}
              isCollapsed={false}
              onNavigate={() => setMobileOpen(false)}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
