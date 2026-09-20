const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://www.wissem.pro'

export default defineNuxtConfig({
  extends: ['@wissem-industries/ui'],
  compatibilityDate: '2026-09-19',
  devtools: { enabled: false },
  css: ['~/assets/css/app.css'],
  modules: ['@nuxtjs/i18n', '@nuxtjs/plausible'],
  runtimeConfig: {
    telegramBotToken: '',
    telegramChatId: '',
    public: {
      siteUrl,
    },
  },
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'fr',
    langDir: 'locales',
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'site_locale',
      redirectOn: 'root',
      alwaysRedirect: false,
      fallbackLocale: 'fr',
    },
  },
  plausible: {
    proxy: false,
    autoOutboundTracking: true,
    fileDownloads: { fileExtensions: ['pdf'] },
    formSubmissions: true,
  },
  nitro: {
    preset: 'bun',
  },
  sourcemap: {
    client: false,
    server: false,
  },
})
