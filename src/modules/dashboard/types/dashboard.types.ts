import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon?: LucideIcon;
  badge?: string | number;
  badgeVariant?: "default" | "secondary" | "destructive" | "outline";
  disabled?: boolean;
  external?: boolean;
  permission?: string;
  children?: NavItem[];
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface DashboardUser {
  name: string;
  email: string;
  avatarUrl?: string;
  role: string;
}

export interface StatMetric {
  id: string;
  title: string;
  value: string | number;
  change: number; // percentage, e.g. +12.5 or -3.2
  trend: "up" | "down" | "neutral";
  period: string;
  icon: LucideIcon;
}

export interface ActivityItem {
  id: string;
  user: {
    name: string;
    avatarUrl?: string;
    initials: string;
  };
  action: string;
  target: string;
  timestamp: string;
  type: "create" | "update" | "delete" | "status";
}

export interface OverviewTableItem {
  id: string;
  project: string;
  client: string;
  budget: number;
  status: "Completed" | "In Progress" | "Pending" | "Cancelled";
  date: string;
}
