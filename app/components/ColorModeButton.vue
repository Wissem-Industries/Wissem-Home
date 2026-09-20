<script setup lang="ts">
const colorMode = useColorMode()
const { content } = usePortfolioContent()
const themeCookie = useCookie<'light' | 'dark' | undefined>('site_theme')
const route = useRoute()

function fallbackHref(mode: 'light' | 'dark') {
  return `/theme/${mode}?redirect=${encodeURIComponent(route.fullPath)}`
}

function setTheme(mode: 'light' | 'dark') {
  colorMode.preference = mode
  themeCookie.value = mode
}
</script>

<template>
  <UButton
    :to="fallbackHref('dark')"
    external
    :aria-label="content.theme.dark"
    icon="i-ri-moon-line"
    color="neutral"
    variant="ghost"
    size="sm"
    class="theme-switch theme-switch--dark size-11 justify-center rounded-full p-0 sm:size-9"
    @click.prevent="setTheme('dark')"
  />
  <UButton
    :to="fallbackHref('light')"
    external
    :aria-label="content.theme.light"
    icon="i-ri-sun-line"
    color="neutral"
    variant="ghost"
    size="sm"
    class="theme-switch theme-switch--light size-11 justify-center rounded-full p-0 sm:size-9"
    @click.prevent="setTheme('light')"
  />
</template>
