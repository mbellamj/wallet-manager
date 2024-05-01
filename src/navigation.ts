import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";
import { locales } from "./next-i18n/next.locales";

export const localePrefix = "always";

export const pathnames = {
  "/": "/",
  "/analytics": {
    en: "/analytics",
    fr: "/analyses",
  },
  "/tokens": {
    en: "/tokens",
    fr: "/tokens",
  },
  "/settings": {
    en: "/settings",
    fr: "/parametres",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
