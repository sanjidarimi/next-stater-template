import type { NavGroup } from "../../types/dashboard.types";
import { SidebarNavItem } from "./sidebar-nav-item";

interface SidebarNavGroupProps {
  group: NavGroup;
  isCollapsed: boolean;
  onNavigate?: () => void;
}

export function SidebarNavGroup({ group, isCollapsed, onNavigate }: SidebarNavGroupProps) {
  return (
    <div className="space-y-1">
      {!isCollapsed && (
        <h4 className="text-muted-foreground/70 px-3 py-1 text-xs font-semibold tracking-wider uppercase">
          {group.title}
        </h4>
      )}
      <div className="space-y-1">
        {group.items.map((item) => (
          <SidebarNavItem
            key={item.href}
            item={item}
            isCollapsed={isCollapsed}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}
