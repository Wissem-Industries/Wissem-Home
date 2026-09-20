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
      class="liquid-glass liquid-glass-nav mx-auto flex w-fit max-w-full items-center rounded-full p-1"
    >
      <UNavigationMenu
        :items="items"
        class="max-w-full"
        :ui="{
          list: 'gap-0.5',
          link: 'rounded-full px-2.5 py-2 text-xs sm:px-3 sm:py-1.5 sm:text-sm',
          linkLeadingIcon: 'size-4 shrink-0 sm:hidden',
          linkLabel: 'hidden sm:inline',
        }"
      />

      <div class="ml-0.5 flex items-center border-l border-default pl-0.5">
        <LocaleSwitchButton />
        <ColorModeButton />
      </div>
    </nav>
  </header>
</template>
