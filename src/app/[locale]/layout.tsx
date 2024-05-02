import BaseLayout from "@/components/layouts/base";
import "@/globals.css";
import { availableLocalesMap, defaultLocale } from "@/next-i18n/next.locales";
import { LocaleProvider } from "@/providers/locale";
import { ThemeProvider } from "@/providers/theme";
import { Web3ContextProvider } from "@/providers/web3";
import { LayoutProps } from "@/types";
import type { Metadata } from "next";
import { getLocale } from "next-intl/server";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<LayoutProps>) {
  const locale = await getLocale();

  const { hrefLang, langDir } = availableLocalesMap[locale] || defaultLocale;

  return (
    <html lang={hrefLang} dir={langDir} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <LocaleProvider>
            <Web3ContextProvider>
              <BaseLayout>{children}</BaseLayout>
            </Web3ContextProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
