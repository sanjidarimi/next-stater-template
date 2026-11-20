import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import type { StatMetric, ActivityItem, OverviewTableItem } from "../types/dashboard.types";

export const mockStatMetrics: StatMetric[] = [
  {
    id: "total-revenue",
    title: "Total Revenue",
    value: "$45,231.89",
    change: 20.1,
    trend: "up",
    period: "from last month",
    icon: DollarSign,
  },
  {
    id: "subscriptions",
    title: "Subscriptions",
    value: "+2,350",
    change: 180.1,
    trend: "up",
    period: "from last month",
    icon: Users,
  },
  {
    id: "sales",
    title: "Sales Volume",
    value: "+12,234",
    change: 19,
    trend: "up",
    period: "from last month",
    icon: CreditCard,
  },
  {
    id: "active-users",
    title: "Active Now",
    value: "573",
    change: -2.4,
    trend: "down",
    period: "since last hour",
    icon: Activity,
  },
];

export const mockActivityItems: ActivityItem[] = [
  {
    id: "act-1",
    user: {
      name: "Sarah Jenkins",
      initials: "SJ",
    },
    action: "deployed new service",
    target: "api-gateway-v2",
    timestamp: "10 minutes ago",
    type: "create",
  },
  {
    id: "act-2",
    user: {
      name: "David Kim",
      initials: "DK",
    },
    action: "updated role permissions for",
    target: "Engineering Leads",
    timestamp: "45 minutes ago",
    type: "update",
  },
  {
    id: "act-3",
    user: {
      name: "Elena Rostova",
      initials: "ER",
    },
    action: "invited team member",
    target: "michael.b@company.com",
    timestamp: "2 hours ago",
    type: "create",
  },
  {
    id: "act-4",
    user: {
      name: "Marcus Vance",
      initials: "MV",
    },
    action: "resolved security alert on",
    target: "OAuth2 Provider",
    timestamp: "5 hours ago",
    type: "status",
  },
];

export const mockOverviewProjects: OverviewTableItem[] = [
  {
    id: "PRJ-001",
    project: "Cloud Infrastructure Migration",
    client: "Acme Corp",
    budget: 32000,
    status: "In Progress",
    date: "2026-11-18",
  },
  {
    id: "PRJ-002",
    project: "Mobile Application Redesign",
    client: "Global Logistics",
    budget: 18500,
    status: "Completed",
    date: "2026-11-15",
  },
  {
    id: "PRJ-003",
    project: "Enterprise Data Pipeline",
    client: "FinTech Innovations",
    budget: 54000,
    status: "In Progress",
    date: "2026-11-12",
  },
  {
    id: "PRJ-004",
    project: "Identity & SSO Gateway",
    client: "HealthCare Systems",
    budget: 27500,
    status: "Pending",
    date: "2026-11-09",
  },
  {
    id: "PRJ-005",
    project: "Legacy Monolith Refactor",
    client: "Retail Dynamics",
    budget: 12000,
    status: "Cancelled",
    date: "2026-11-01",
  },
];

export const mockChartData = [
  { month: "Jan", revenue: 2400, cost: 1800 },
  { month: "Feb", revenue: 3100, cost: 2100 },
  { month: "Mar", revenue: 4200, cost: 2400 },
  { month: "Apr", revenue: 3800, cost: 2200 },
  { month: "May", revenue: 5600, cost: 2900 },
  { month: "Jun", revenue: 6400, cost: 3100 },
  { month: "Jul", revenue: 7200, cost: 3400 },
];
