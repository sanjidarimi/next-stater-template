import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  FileText,
  ShieldCheck,
  FolderKanban,
  HelpCircle,
} from "lucide-react";
import type { NavGroup } from "../types/dashboard.types";

export const dashboardNavigation: NavGroup[] = [
  {
    title: "Overview",
    items: [
      {
        label: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
        badge: "New",
      },
      {
        label: "Projects",
        href: "/dashboard/projects",
        icon: FolderKanban,
      },
    ],
  },
  {
    title: "Management",
    items: [
      {
        label: "Users",
        href: "/dashboard/users",
        icon: Users,
        children: [
          {
            label: "All Users",
            href: "/dashboard/users",
          },
          {
            label: "Roles & Permissions",
            href: "/dashboard/users/roles",
          },
        ],
      },
      {
        label: "Reports",
        href: "/dashboard/reports",
        icon: FileText,
      },
    ],
  },
  {
    title: "System",
    items: [
      {
        label: "Security",
        href: "/dashboard/security",
        icon: ShieldCheck,
      },
      {
        label: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
      {
        label: "Help & Docs",
        href: "/dashboard/help",
        icon: HelpCircle,
      },
    ],
  },
];
