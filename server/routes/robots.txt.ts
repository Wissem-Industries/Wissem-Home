import { normalizePublicSiteUrl, toAbsoluteSiteUrl } from '#shared/utils/site'

export default defineEventHandler((event) => {
  const siteUrl = normalizePublicSiteUrl(useRuntimeConfig(event).public.siteUrl)
  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return `User-agent: *
Allow: /

Sitemap: ${toAbsoluteSiteUrl('/sitemap.xml', siteUrl)}
`
})
