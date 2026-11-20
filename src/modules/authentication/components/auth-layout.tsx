import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { authConfig } from "../config/auth.config";
import { ShieldCheck, ArrowLeft } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function AuthLayout({ title, description, children }: AuthLayoutProps) {
  return (
    <div className="bg-muted/30 relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
      {/* Top Controls */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-xs font-medium transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="absolute top-4 right-4 sm:top-8 sm:right-8">
        <ThemeToggle />
      </div>

      {/* Main Auth Card Container */}
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          {authConfig.branding.showLogo && (
            <div className="bg-primary text-primary-foreground mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl shadow-md">
              <ShieldCheck className="h-6 w-6" />
            </div>
          )}
          <h1 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
          <p className="text-muted-foreground text-xs sm:text-sm">{description}</p>
        </div>

        {children}
      </div>
    </div>
  );
}
