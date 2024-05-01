import createMiddleware from "next-intl/middleware";

import { localePrefix, pathnames } from "./navigation";
import { defaultLocale, locales } from "./next-i18n/next.locales";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: defaultLocale!.code,

  // Always use a Locale as a prefix for routing
  localePrefix,

  // We already have our own way of providing alternate links
  // generated on `next.dynamic.mjs`
  // alternateLinks: false,
  pathnames,
});

// We only want the middleware to run on the `/` route
// to redirect users to their preferred locale
export const config = { matcher: ["/", "/(fr|en)/:path*"] };
