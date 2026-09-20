<script setup lang="ts">
import type { LocaleCode } from '#shared/content'

const { content, locale, setLocale } = usePortfolioContent()

const languages: Array<{ code: LocaleCode; label: string }> = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
]

const languageItems = computed(() =>
  languages.map((language) => ({
    label: `[${language.code.toUpperCase()}]  ${language.label}`,
    icon: locale.value === language.code ? 'i-ri-check-line' : undefined,
    onSelect: () => selectLocale(language.code),
  })),
)

async function selectLocale(code: LocaleCode) {
  if (code !== locale.value) await setLocale(code)
}
</script>

<template>
  <UDropdownMenu
    :items="languageItems"
    :content="{ align: 'end', sideOffset: 8 }"
    :ui="{ content: 'min-w-40', itemLabel: 'whitespace-pre' }"
  >
    <UButton
      :label="locale.toUpperCase()"
      :aria-label="content.localeSwitchLabel"
      color="neutral"
      variant="ghost"
      trailing-icon="i-ri-arrow-down-s-line"
      size="xs"
      class="w-14 justify-center rounded-full font-mono text-[10px]"
    />
  </UDropdownMenu>
</template>
