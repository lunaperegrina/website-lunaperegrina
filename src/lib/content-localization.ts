import type { Locale } from "@i18n/utils";

export function isEntryInLocale(id: string, locale: Locale): boolean {
  return id.startsWith(`${locale}/`);
}

export function stripLocalePrefixFromSlug(slug: string, locale: Locale): string {
  const prefix = `${locale}/`;
  return slug.startsWith(prefix) ? slug.slice(prefix.length) : slug;
}
