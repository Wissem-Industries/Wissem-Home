import { getPortfolioContent } from '#shared/content'

export function usePortfolioContent() {
  const { locale, setLocale } = useI18n()
  const localeCookie = useCookie('site_locale', {
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    secure: !import.meta.dev,
  })

  watch(
    locale,
    (value) => {
      localeCookie.value = value
    },
    { immediate: true },
  )

  return {
    content: computed(() => getPortfolioContent(locale.value)),
    locale,
    setLocale,
  }
}
