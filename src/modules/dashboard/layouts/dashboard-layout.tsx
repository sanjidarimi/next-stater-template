"use client";

import * as React from "react";
import { SidebarProvider } from "../hooks/use-sidebar";
import { DashboardSidebar } from "../components/sidebar/dashboard-sidebar";
import { DashboardNavbar } from "../components/navbar/dashboard-navbar";
import { DashboardMobileNavigation } from "../components/mobile-navigation/dashboard-mobile-navigation";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="bg-background flex min-h-screen">
        {/* Desktop Collapsible Sidebar */}
        <DashboardSidebar />

        {/* Mobile Slide-in Drawer */}
        <DashboardMobileNavigation />

        {/* Main Content Area */}
        <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
          <DashboardNavbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
