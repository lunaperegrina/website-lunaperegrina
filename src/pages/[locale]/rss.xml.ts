import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { locales, toLocalizedPath, useTranslations, type Locale } from "@i18n/utils";
import { isEntryInLocale, stripLocalePrefixFromSlug } from "@lib/content-localization";

export function getStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export async function GET(context: APIContext) {
  const locale = context.params.locale as Locale;
  const t = useTranslations(locale);

  const blog = (await getCollection("blog")).filter(
    (post) => !post.data.draft && isEntryInLocale(post.id, locale),
  );
  const projects = (await getCollection("projects")).filter(
    (project) => !project.data.draft,
  );

  const items = [...blog, ...projects].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: t("rss.title"),
    description: t("rss.description"),
    site: context.site!.toString(),
    items: items.map((item) => {
      const slug = item.collection === "blog"
        ? stripLocalePrefixFromSlug(item.slug, locale)
        : item.slug;

      return {
        title: item.data.title,
        description: item.data.description,
        pubDate: item.data.date,
        link: toLocalizedPath(locale, `${item.collection}/${slug}`),
      };
    }),
  });
}
