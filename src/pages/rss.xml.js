import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Сто Евангельских Трактатов',
    description: 'Проповеди о пути спасения по ключевым текстам Писания от обученных проповедников',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>ru-RU</language>`,
  });
}