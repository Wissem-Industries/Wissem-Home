export const SITE_ROUTES = [
  { key: 'home', path: '/', icon: 'i-lucide-home', changefreq: 'weekly', priority: '1.0' },
  {
    key: 'projects',
    path: '/projects',
    icon: 'i-lucide-folder',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    key: 'contact',
    path: '/contact',
    icon: 'i-lucide-message-square',
    changefreq: 'monthly',
    priority: '0.7',
  },
] as const

export function normalizePublicSiteUrl(value?: string | null) {
  const candidate = (value || 'https://www.wissem.pro').trim()
  const withProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(candidate)
    ? candidate
    : `https://${candidate}`

  try {
    const url = new URL(withProtocol)
    return ['http:', 'https:'].includes(url.protocol)
      ? url.toString().replace(/\/+$/, '')
      : 'https://www.wissem.pro'
  } catch {
    return 'https://www.wissem.pro'
  }
}

export function toAbsoluteSiteUrl(path: string, siteUrl: string) {
  return new URL(path, normalizePublicSiteUrl(siteUrl)).toString()
}
