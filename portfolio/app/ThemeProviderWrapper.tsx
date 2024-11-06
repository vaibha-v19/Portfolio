// app/ThemeProviderWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "./provider";

export function ThemeProviderWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  ) : (
    <div style={{ visibility: "hidden" }}>{children}</div>
  );
}
