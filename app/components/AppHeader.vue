<script setup lang="ts">
import { SITE_ROUTES } from '#shared/utils/site'

const { content } = usePortfolioContent()
const items = computed(() =>
  SITE_ROUTES.map((route) => ({
    label: content.value.navigation[route.key],
    icon: route.icon,
    to: route.path,
  })),
)
</script>

<template>
  <header class="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
    <nav
      :aria-label="content.navigation.label"
      class="portfolio-navbar mx-auto flex w-fit max-w-full items-center gap-0.5 rounded-full p-1"
    >
      <UNavigationMenu
        :items="items"
        class="max-w-full"
        :ui="{
          list: 'gap-0.5',
          item: 'py-0',
          link: 'h-9 rounded-full px-2.5 py-0 text-xs sm:w-20 sm:justify-center sm:px-3 sm:text-sm',
          linkLeadingIcon: 'size-4 shrink-0 sm:hidden',
          linkLabel: 'hidden sm:inline',
        }"
      />

      <div class="ml-0.5 flex items-center gap-0.5 border-l border-default pl-1">
        <LocaleSwitchButton />
        <ColorModeButton />
      </div>
    </nav>
  </header>
</template>
