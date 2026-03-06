import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { toLocalizedPath, useTranslations } from "@i18n/utils";

const locale = "pt" as const;
const t = useTranslations(locale);

type Context = {
  site: string;
};

export async function GET(context: Context) {
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft);
  const projects = (await getCollection("projects")).filter(
    (project) => !project.data.draft,
  );

  const items = [...blog, ...projects].sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );

  return rss({
    title: t("rss.title"),
    description: t("rss.description"),
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: toLocalizedPath(locale, `${item.collection}/${item.slug}`),
    })),
  });
}
