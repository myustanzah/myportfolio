"use client";

import React from "react";
import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return <MTThemeProvider>{children}</MTThemeProvider>;
}

export default AppLayout;
