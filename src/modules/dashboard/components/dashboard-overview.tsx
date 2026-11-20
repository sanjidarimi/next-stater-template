"use client";

import { useState } from "react";
import { DashboardPageHeader } from "./ui/dashboard-page-header";
import { DashboardContent } from "./ui/dashboard-content";
import { DashboardStatCard } from "./dashboard-widgets/dashboard-stat-card";
import { DashboardChartCard } from "./dashboard-widgets/dashboard-chart-card";
import { RecentActivityList } from "./dashboard-widgets/recent-activity-list";
import { OverviewDataTable } from "./dashboard-widgets/overview-data-table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { mockStatMetrics } from "../data/mock-dashboard.data";
import { dashboardConfig } from "../config/dashboard.config";
import { Download, Plus } from "lucide-react";
import { toast } from "sonner";

export function DashboardOverview() {
  const [dateRange, setDateRange] = useState<string>("30d");

  const handleExport = () => {
    toast.success("Report export initiated", {
      description: "Your dashboard analytics export is downloading.",
    });
  };

  const handleNewProject = () => {
    toast.info("Create Project dialog", {
      description: "Modal or slide-over form can be mounted here.",
    });
  };

  return (
    <DashboardContent>
      {/* Header with Welcome & Date Range selector */}
      <DashboardPageHeader
        title={`Welcome back, ${dashboardConfig.user.name}`}
        description="Here is an overview of system performance, analytics, and active engagements."
      >
        <Select value={dateRange} onValueChange={setDateRange}>
          <SelectTrigger className="h-9 w-35 text-xs">
            <SelectValue placeholder="Date range" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="today">Today</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
            <SelectItem value="year">Full Year</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" size="sm" onClick={handleExport} className="gap-1.5">
          <Download className="h-4 w-4" />
          <span>Export</span>
        </Button>

        <Button variant="default" size="sm" onClick={handleNewProject} className="gap-1.5">
          <Plus className="h-4 w-4" />
          <span>New Project</span>
        </Button>
      </DashboardPageHeader>

      {/* 4 Responsive Stat Metric Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {mockStatMetrics.map((metric) => (
          <DashboardStatCard key={metric.id} metric={metric} />
        ))}
      </div>

      {/* Analytics Chart + Recent Activity */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-7">
        <DashboardChartCard />
        <RecentActivityList />
      </div>

      {/* Data Table */}
      <OverviewDataTable />
    </DashboardContent>
  );
}
