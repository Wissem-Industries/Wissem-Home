<script setup lang="ts">
import { LOCALES, type LocaleCode } from '#shared/content'

const { content, locale, setLocale } = usePortfolioContent()
const route = useRoute()

function fallbackHref(code: LocaleCode) {
  return `/locale/${code}?redirect=${encodeURIComponent(route.fullPath)}`
}

async function selectLocale(code: LocaleCode) {
  if (code !== locale.value) await setLocale(code)
}
</script>

<template>
  <div
    role="group"
    :aria-label="content.localeSwitchLabel"
    class="flex items-center rounded-full border border-default/60 bg-elevated/55 p-0.5"
  >
    <UButton
      v-for="code in LOCALES"
      :key="code"
      :to="fallbackHref(code)"
      external
      :label="code.toUpperCase()"
      :aria-pressed="locale === code"
      :color="locale === code ? 'primary' : 'neutral'"
      :variant="locale === code ? 'soft' : 'ghost'"
      size="xs"
      class="min-h-7 rounded-full px-2 font-mono text-[10px]"
      @click.prevent="selectLocale(code)"
    />
  </div>
</template>
