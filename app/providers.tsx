"use client";

import { ApiContextProvider } from "@/context/ApiContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ApiContextProvider>{children}</ApiContextProvider>;
}
