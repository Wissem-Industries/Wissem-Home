import { normalizePublicSiteUrl, SITE_ROUTES, toAbsoluteSiteUrl } from '#shared/utils/site'

export default defineEventHandler((event) => {
  const siteUrl = normalizePublicSiteUrl(useRuntimeConfig(event).public.siteUrl)
  const urls = SITE_ROUTES.map(
    (route) => `  <url>
    <loc>${toAbsoluteSiteUrl(route.path, siteUrl)}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  ).join('\n')

  setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
})
