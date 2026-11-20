import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockActivityItems } from "../../data/mock-dashboard.data";

export function RecentActivityList() {
  return (
    <Card className="col-span-full lg:col-span-3">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold">Recent Team Activity</CardTitle>
        <CardDescription className="text-xs">
          Latest operations and actions across your organization.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockActivityItems.map((item) => (
          <div key={item.id} className="flex items-start gap-3 text-sm">
            <Avatar className="mt-0.5 h-8 w-8 shrink-0">
              {item.user.avatarUrl && <AvatarImage src={item.user.avatarUrl} />}
              <AvatarFallback className="bg-primary/10 text-primary text-[10px] font-semibold">
                {item.user.initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 flex-1 space-y-0.5">
              <p className="text-xs leading-none font-medium">
                <span className="text-foreground">{item.user.name}</span>{" "}
                <span className="text-muted-foreground">{item.action}</span>{" "}
                <span className="text-foreground truncate font-semibold">{item.target}</span>
              </p>
              <p className="text-muted-foreground text-[10px]">{item.timestamp}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
