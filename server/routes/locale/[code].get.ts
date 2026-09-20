import { LOCALES, type LocaleCode } from '#shared/content'

export default defineEventHandler((event) => {
  const code = getRouterParam(event, 'code') as LocaleCode | undefined
  if (!code || !LOCALES.includes(code)) {
    throw createError({ statusCode: 404, statusMessage: 'Locale not found' })
  }

  const requestedRedirect = getQuery(event).redirect
  const redirect =
    typeof requestedRedirect === 'string' &&
    requestedRedirect.startsWith('/') &&
    !requestedRedirect.startsWith('//')
      ? requestedRedirect
      : '/'

  setCookie(event, 'site_locale', code, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })

  return sendRedirect(event, redirect, 302)
})
