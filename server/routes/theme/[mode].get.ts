const THEMES = new Set(['light', 'dark'])

export default defineEventHandler((event) => {
  const mode = getRouterParam(event, 'mode') || ''
  const query = getQuery(event)
  const redirect =
    typeof query.redirect === 'string' &&
    query.redirect.startsWith('/') &&
    !query.redirect.startsWith('//')
      ? query.redirect
      : '/'

  if (!THEMES.has(mode)) return sendRedirect(event, redirect, 302)

  setCookie(event, 'site_theme', mode, {
    httpOnly: false,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
  })

  return sendRedirect(event, redirect, 302)
})
