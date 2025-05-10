import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from "next-intl/navigation";

export const locales = ["en", "pt"] as const;
export const localePrefix = "always"; // Default

export const pathnames = {
  "/": "/",

  "/about": {
    en: "/about",
    pt: "/sobre"
  },

  "/treatments": {
    en: "/treatments",
    pt: "/tratamentos"
  },

  "/faqs": "/faqs",

  "/blog": "/blog",

  "/contacts": {
    en: "/contacts",
    pt: "/contactos"
  }
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
