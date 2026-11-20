"use client";

import * as React from "react";
import { StoreProvider } from "@/store/provider";
import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

interface AppProviderProps {
  children: React.ReactNode;
}

/**
 * Root application provider combining Redux, Theme, and Notifications.
 */
export function AppProvider({ children }: AppProviderProps) {
  return (
    <StoreProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        <Toaster position="top-right" richColors closeButton />
      </ThemeProvider>
    </StoreProvider>
  );
}
