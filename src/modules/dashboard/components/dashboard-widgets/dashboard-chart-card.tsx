"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockChartData } from "../../data/mock-dashboard.data";

export function DashboardChartCard() {
  const [period, setPeriod] = useState<string>("7m");

  const maxVal = Math.max(...mockChartData.map((d) => d.revenue));

  return (
    <Card className="col-span-full lg:col-span-4">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <div>
          <CardTitle className="text-base font-semibold">Revenue Analytics</CardTitle>
          <CardDescription className="text-xs">
            Monthly gross revenue vs operations cost breakdown.
          </CardDescription>
        </div>
        <Select value={period} onValueChange={setPeriod}>
          <SelectTrigger className="h-8 w-[120px] text-xs">
            <SelectValue placeholder="Period" />
          </SelectTrigger>
          <SelectContent align="end">
            <SelectItem value="7m">Last 7 Months</SelectItem>
            <SelectItem value="30d">Last 30 Days</SelectItem>
            <SelectItem value="1y">Full Year</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {/* Responsive CSS Bar Chart */}
        <div className="space-y-4">
          <div className="grid h-48 grid-cols-7 items-end gap-2 border-b pt-4 pb-2 sm:gap-4">
            {mockChartData.map((item) => {
              const heightPercent = Math.round((item.revenue / maxVal) * 100);
              const costHeightPercent = Math.round((item.cost / maxVal) * 100);

              return (
                <div
                  key={item.month}
                  className="group flex h-full flex-col items-center justify-end"
                >
                  <div className="flex h-full w-full items-end justify-center gap-1 sm:gap-1.5">
                    {/* Revenue Bar */}
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className="bg-primary w-full max-w-[18px] rounded-t-sm transition-all duration-300 group-hover:opacity-80"
                      title={`Revenue: $${item.revenue}`}
                    />
                    {/* Cost Bar */}
                    <div
                      style={{ height: `${costHeightPercent}%` }}
                      className="bg-muted-foreground/30 w-full max-w-[18px] rounded-t-sm transition-all duration-300 group-hover:opacity-60"
                      title={`Cost: $${item.cost}`}
                    />
                  </div>
                  <span className="text-muted-foreground mt-2 text-[11px] font-medium">
                    {item.month}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-muted-foreground flex items-center justify-center gap-6 pt-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="bg-primary h-2.5 w-2.5 rounded-sm" />
              <span>Gross Revenue</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-muted-foreground/30 h-2.5 w-2.5 rounded-sm" />
              <span>Operational Cost</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
