import { getIntlLocale, type Locale } from "@i18n/utils";

export function formatDate(date: Date, locale: Locale) {
  return Intl.DateTimeFormat(getIntlLocale(locale), {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

export function readingTime(html: string, locale: Locale) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return locale === "pt"
    ? `${readingTimeMinutes} min de leitura`
    : `${readingTimeMinutes} min read`;
}

export function dateRange(
  startDate: Date,
  locale: Locale,
  endDate?: Date | string,
): string {
  const intlLocale = getIntlLocale(locale);
  const startMonth = startDate
    .toLocaleString(intlLocale, { month: "short" })
    .toLocaleLowerCase();
  const startYear = startDate.getFullYear().toString();
  let endMonth = "";
  let endYear = "";

  if (endDate) {
    if (typeof endDate === "string") {
      endMonth = "";
      const normalized = endDate.trim().toLowerCase();
      endYear = normalized === "present" || normalized === "current"
        ? locale === "pt"
          ? "Atual"
          : "Present"
        : endDate;
    } else {
      endMonth = endDate
        .toLocaleString(intlLocale, { month: "short" })
        .toLocaleLowerCase();
      endYear = endDate.getFullYear().toString();
    }
  }

  return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
}
