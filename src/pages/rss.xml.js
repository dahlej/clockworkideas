import rss, { pagesGlobToRssItems } from '@astrojs/rss';
export async function GET(context) {
  return rss({
    title: 'Clockwork Ideas',
    description: 'AI automation, customer communication, scheduling, workflow automation, and business integration services for small and medium businesses.',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./blog/*.{md,mdx}'),
    ),
  });
}
