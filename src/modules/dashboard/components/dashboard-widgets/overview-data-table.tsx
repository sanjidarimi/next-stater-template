import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { formatCurrency } from "@/utils/currency";
import { formatDate } from "@/utils/date";
import { mockOverviewProjects } from "../../data/mock-dashboard.data";

const statusVariants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  Completed: "default",
  "In Progress": "secondary",
  Pending: "outline",
  Cancelled: "destructive",
};

export function OverviewDataTable() {
  return (
    <Card className="col-span-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Active Projects & Workstreams</CardTitle>
        <CardDescription className="text-xs">
          High-priority enterprise engagements and deliverables.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Project Title</TableHead>
                <TableHead>Client</TableHead>
                <TableHead>Budget</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Last Updated</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockOverviewProjects.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-mono text-xs">{row.id}</TableCell>
                  <TableCell className="text-foreground font-medium">{row.project}</TableCell>
                  <TableCell className="text-muted-foreground">{row.client}</TableCell>
                  <TableCell className="font-medium">{formatCurrency(row.budget)}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariants[row.status] || "outline"}>{row.status}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-right text-xs">
                    {formatDate(row.date)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
