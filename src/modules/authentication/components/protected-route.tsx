"use client";

import * as React from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "../hooks/use-auth";
import { authConfig } from "../config/auth.config";
import { PageLoader } from "@/components/shared/page-loader";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Route protection wrapper component for client components and layouts.
 * Automatically redirects unauthenticated users to the configured login route.
 */
export function ProtectedRoute({
  children,
  fallback = <PageLoader message="Verifying session credentials..." />,
}: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      const returnUrl = encodeURIComponent(pathname);
      router.push(`${authConfig.routes.unauthorizedRedirect}?from=${returnUrl}`);
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  if (isLoading) {
    return <>{fallback}</>;
  }

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
}
