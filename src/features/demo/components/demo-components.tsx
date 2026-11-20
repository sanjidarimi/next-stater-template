"use client";

import * as React from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { Bell, Sparkles, Check, Info } from "lucide-react";

export function DemoComponents() {
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);

  const showToast = (variant: "default" | "success" | "error" | "info") => {
    switch (variant) {
      case "success":
        toast.success("Operation Successful", {
          description: "Redux & Sonner toast notification triggered.",
        });
        break;
      case "error":
        toast.error("Action Failed", {
          description: "Something went wrong in the execution.",
        });
        break;
      case "info":
        toast.info("Information Notice", {
          description: "This is a clean, minimal notification notice.",
        });
        break;
      default:
        toast("Standard Notification", {
          description: "Standard Sonner toast works smoothly.",
        });
    }
  };

  return (
    <div className="space-y-6">
      {/* Toast & Dialog showcase */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="text-primary h-5 w-5" />
            Notifications & Dialogs
          </CardTitle>
          <CardDescription>
            Sonner toast notifications and Radix UI accessible modal dialogs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Button variant="default" size="sm" onClick={() => showToast("success")}>
              Success Toast
            </Button>
            <Button variant="destructive" size="sm" onClick={() => showToast("error")}>
              Error Toast
            </Button>
            <Button variant="secondary" size="sm" onClick={() => showToast("info")}>
              Info Toast
            </Button>
            <Button variant="outline" size="sm" onClick={() => setConfirmOpen(true)}>
              Open Confirm Dialog
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Component Gallery Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="text-primary h-5 w-5" />
            UI Primitives & Badges
          </CardTitle>
          <CardDescription>Accessible, theme-aware shadcn/ui components.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-12">Select</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox checked={checked} onCheckedChange={(val) => setChecked(!!val)} />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="text-xs">AL</AvatarFallback>
                    </Avatar>
                    <span>Ada Lovelace</span>
                  </div>
                </TableCell>
                <TableCell>Architect</TableCell>
                <TableCell>
                  <Badge variant="default" className="gap-1">
                    <Check className="h-3 w-3" /> Active
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>View details</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Checkbox checked={false} />
                </TableCell>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-7 w-7">
                      <AvatarFallback className="text-xs">AT</AvatarFallback>
                    </Avatar>
                    <span>Alan Turing</span>
                  </div>
                </TableCell>
                <TableCell>Engineer</TableCell>
                <TableCell>
                  <Badge variant="secondary">Verified</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Info className="h-4 w-4" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>View details</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Confirm Action"
        description="This action demonstrates a reusable confirmation modal with accessibility and theme support."
        confirmLabel="Understood"
        onConfirm={() => {
          toast.success("Confirmed!", {
            description: "Dialog confirmed successfully.",
          });
        }}
      />
    </div>
  );
}
