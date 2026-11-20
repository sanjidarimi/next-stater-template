import type { DashboardUser } from "../types/dashboard.types";

export interface DashboardConfig {
  appName: string;
  appDescription: string;
  defaultSidebarCollapsed: boolean;
  user: DashboardUser;
}

export const dashboardConfig: DashboardConfig = {
  appName: "Next.js Core Starter",
  appDescription: "Modular Admin & Application Dashboard",
  defaultSidebarCollapsed: false,
  user: {
    name: "Alex Morgan",
    email: "alex.morgan@example.com",
    role: "Senior Architect",
    avatarUrl: "",
  },
};
