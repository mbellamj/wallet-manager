"use client";

import { THEME_STORAGE_KEY } from "@/core/common/contants";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { FC, PropsWithChildren } from "react";

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => (
  <NextThemeProvider
    attribute="class"
    defaultTheme="system"
    storageKey={THEME_STORAGE_KEY}
    enableSystem
  >
    {children}
  </NextThemeProvider>
);
