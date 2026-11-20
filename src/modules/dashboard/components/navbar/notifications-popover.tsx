"use client";

import { Bell, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const notifications = [
  {
    id: "n1",
    title: "Deployment Successful",
    description: "Production build deployed to Vercel.",
    time: "5m ago",
    unread: true,
  },
  {
    id: "n2",
    title: "Security Scan Clean",
    description: "Zero high or critical alerts detected.",
    time: "1h ago",
    unread: true,
  },
  {
    id: "n3",
    title: "Database Backup Completed",
    description: "Daily automated snapshot created.",
    time: "4h ago",
    unread: false,
  },
];

export function NotificationsPopover() {
  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative h-9 w-9"
          aria-label="Open notifications"
        >
          <Bell className="text-foreground h-4 w-4" />
          {unreadCount > 0 && (
            <span className="bg-destructive text-destructive-foreground absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex items-center justify-between">
          <span>Notifications</span>
          <Badge variant="secondary" className="text-[10px]">
            {unreadCount} new
          </Badge>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="max-h-[300px] overflow-y-auto">
          {notifications.map((item) => (
            <DropdownMenuItem
              key={item.id}
              className="flex cursor-pointer flex-col items-start gap-1 p-3"
              onClick={() => toast.info(item.title, { description: item.description })}
            >
              <div className="flex w-full items-center justify-between">
                <span className="text-xs font-semibold">{item.title}</span>
                <span className="text-muted-foreground text-[10px]">{item.time}</span>
              </div>
              <p className="text-muted-foreground line-clamp-1 text-[11px]">{item.description}</p>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-primary cursor-pointer justify-center text-xs font-medium"
          onClick={() => toast.success("All notifications marked as read")}
        >
          <Check className="mr-1.5 h-3.5 w-3.5" />
          Mark all as read
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
