<script setup lang="ts">
import type { LocaleCode } from '#shared/content'

const { content, locale, setLocale } = usePortfolioContent()
const route = useRoute()

const languages: Array<{ code: LocaleCode; icon: string; label: string }> = [
  { code: 'fr', icon: 'i-circle-flags-fr', label: 'Français' },
  { code: 'en', icon: 'i-circle-flags-gb', label: 'English' },
]

const currentLanguage = computed(() => languages.find((language) => language.code === locale.value))

function fallbackHref(code: LocaleCode) {
  return `/locale/${code}?redirect=${encodeURIComponent(route.fullPath)}`
}

async function selectLocale(code: LocaleCode, event: MouseEvent) {
  if (code !== locale.value) await setLocale(code)
  const details = (event.currentTarget as HTMLElement | null)?.closest('details')
  details?.removeAttribute('open')
}
</script>

<template>
  <details class="group relative">
    <summary
      :aria-label="content.localeSwitchLabel"
      class="flex h-11 w-16 cursor-pointer list-none items-center justify-center gap-1.5 rounded-full px-2 text-toned hover:bg-elevated/50 hover:text-highlighted sm:h-9"
    >
      <UIcon :name="currentLanguage?.icon" aria-hidden="true" class="size-3.5" />
      <span class="font-mono text-[10px]">{{ locale.toUpperCase() }}</span>
      <UIcon
        name="i-ri-arrow-down-s-line"
        class="size-3 transition-transform group-open:rotate-180"
      />
    </summary>

    <div
      class="wi-popover-surface absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-40 overflow-hidden rounded-md p-1"
    >
      <a
        v-for="language in languages"
        :key="language.code"
        :href="fallbackHref(language.code)"
        class="flex min-h-11 items-center justify-between gap-4 rounded-sm px-3 py-2.5 text-xs text-toned hover:bg-accented hover:text-highlighted"
        :aria-current="locale === language.code ? 'true' : undefined"
        @click.prevent="selectLocale(language.code, $event)"
      >
        <span class="flex items-center gap-2.5">
          <UIcon :name="language.icon" aria-hidden="true" class="size-4" />
          <span>{{ language.label }}</span>
        </span>
        <UIcon v-if="locale === language.code" name="i-ri-check-line" class="size-3.5" />
      </a>
    </div>
  </details>
</template>
