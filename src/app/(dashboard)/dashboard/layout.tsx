import type { Metadata } from "next";
import { DashboardLayout } from "@/modules/dashboard";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Enterprise management and analytics dashboard.",
};

export default function AppDashboardLayout({ children }: { children: React.ReactNode }) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
