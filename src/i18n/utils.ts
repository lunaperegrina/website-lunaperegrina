import { getRelativeLocaleUrl } from "astro:i18n";
import {
  defaultLocale,
  locales,
  type Locale,
  type TranslationKey,
  ui,
} from "./ui";

export { defaultLocale, locales, type Locale, type TranslationKey } from "./ui";

type InterpolationValues = Record<string, number | string>;

function interpolate(
  value: string,
  variables?: InterpolationValues,
): string {
  if (!variables) return value;

  return Object.entries(variables).reduce(
    (output, [key, replacement]) =>
      output.replaceAll(`{${key}}`, String(replacement)),
    value,
  );
}

export function useTranslations(locale: Locale) {
  return (key: TranslationKey, variables?: InterpolationValues) => {
    const message =
      ui[locale]?.[key] ?? ui[defaultLocale][key] ?? key;
    return interpolate(message, variables);
  };
}

export function getLocaleFromPathname(pathname: string): Locale {
  const [, maybeLocale] = pathname.split("/");

  if (locales.includes(maybeLocale as Locale)) {
    return maybeLocale as Locale;
  }

  return defaultLocale;
}

export function getLocaleFromUrl(url: URL): Locale {
  return getLocaleFromPathname(url.pathname);
}

export function getIntlLocale(locale: Locale): string {
  return locale === "pt" ? "pt-BR" : "en-US";
}

function stripSurroundingSlashes(path: string): string {
  return path.replace(/^\/+|\/+$/g, "");
}

export function getPathWithoutLocale(pathname: string): string {
  const locale = getLocaleFromPathname(pathname);
  const prefix = `/${locale}`;

  if (pathname === prefix || pathname === `${prefix}/`) {
    return "";
  }

  if (pathname.startsWith(`${prefix}/`)) {
    return stripSurroundingSlashes(pathname.slice(prefix.length));
  }

  return stripSurroundingSlashes(pathname);
}

export function toLocalizedPath(locale: Locale, path = ""): string {
  const normalized = stripSurroundingSlashes(path);
  return getRelativeLocaleUrl(locale, normalized);
}

export function getSwitchLocalePath(url: URL, locale: Locale): string {
  return toLocalizedPath(locale, getPathWithoutLocale(url.pathname));
}

export function getResumePath(locale: Locale): string {
  return locale === "pt"
    ? "/luna-peregrina-cv-pt.pdf"
    : "/luna-peregrina-cv-en.pdf";
}
