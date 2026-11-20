"use client";

import { useEffect, useState } from "react";

/**
 * Hook to avoid hydration mismatch by verifying if component is mounted on client.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
