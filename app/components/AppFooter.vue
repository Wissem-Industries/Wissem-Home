<script setup lang="ts">
import { getLinkTarget, isExternalLink } from '#shared/utils/links'

const { content } = usePortfolioContent()
const credits = computed(() => `© ${new Date().getFullYear()} ${content.value.footer}`)
</script>

<template>
  <UContainer>
    <footer
      class="flex flex-col items-center justify-between gap-4 border-t border-default py-6 sm:flex-row"
    >
      <p class="text-center text-xs text-muted sm:text-left">
        {{ credits }}
      </p>

      <div class="flex items-center gap-1">
        <UButton
          v-for="link in content.links"
          :key="link.id"
          :aria-label="link.label"
          :icon="link.icon"
          :to="link.to"
          :external="isExternalLink(link.to)"
          :target="getLinkTarget(link.to)"
          color="neutral"
          variant="ghost"
          size="sm"
        />
      </div>
    </footer>
  </UContainer>
</template>
