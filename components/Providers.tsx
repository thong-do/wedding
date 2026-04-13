"use client";

import { LightboxProvider } from "@/components/LightboxProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <LightboxProvider>{children}</LightboxProvider>;
}
