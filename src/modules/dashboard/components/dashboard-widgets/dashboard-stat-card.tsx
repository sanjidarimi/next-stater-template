import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { StatMetric } from "../../types/dashboard.types";

interface DashboardStatCardProps {
  metric: StatMetric;
}

export function DashboardStatCard({ metric }: DashboardStatCardProps) {
  const Icon = metric.icon;
  const isPositive = metric.change >= 0;

  return (
    <Card className="hover:border-primary/40 transition-colors">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-muted-foreground text-sm font-medium">{metric.title}</CardTitle>
        <div className="bg-muted text-muted-foreground flex h-8 w-8 items-center justify-center rounded-lg">
          <Icon className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="space-y-1">
        <div className="text-foreground text-2xl font-bold tracking-tight">{metric.value}</div>
        <div className="text-muted-foreground flex items-center gap-1 text-xs">
          <span
            className={cn(
              "inline-flex items-center font-semibold",
              isPositive ? "text-emerald-600 dark:text-emerald-400" : "text-destructive"
            )}
          >
            {isPositive ? (
              <ArrowUpRight className="mr-0.5 h-3.5 w-3.5" />
            ) : (
              <ArrowDownRight className="mr-0.5 h-3.5 w-3.5" />
            )}
            {isPositive ? `+${metric.change}%` : `${metric.change}%`}
          </span>
          <span>{metric.period}</span>
        </div>
      </CardContent>
    </Card>
  );
}
