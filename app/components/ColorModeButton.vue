<script setup lang="ts">
const colorMode = useColorMode()
const { content } = usePortfolioContent()
const isDark = computed(() => colorMode.value === 'dark')

function toggle() {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <ClientOnly>
    <UButton
      :aria-label="isDark ? content.theme.light : content.theme.dark"
      :icon="isDark ? 'i-ri-sun-line' : 'i-ri-moon-line'"
      color="neutral"
      variant="ghost"
      size="sm"
      class="rounded-full"
      @click="toggle"
    />
    <template #fallback>
      <span class="block size-8" />
    </template>
  </ClientOnly>
</template>
