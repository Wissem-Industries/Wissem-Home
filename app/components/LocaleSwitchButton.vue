<script setup lang="ts">
const { content, locale, setLocale } = usePortfolioContent()
const nextLocale = computed(() => (locale.value === 'fr' ? 'en' : 'fr'))

async function toggle() {
  await setLocale(nextLocale.value)
}
</script>

<template>
  <UButton
    :aria-label="content.localeSwitchLabel"
    :label="locale.toUpperCase()"
    color="neutral"
    variant="ghost"
    size="sm"
    class="rounded-full font-mono text-xs"
    @click="toggle"
  />
</template>
