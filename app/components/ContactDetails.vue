<script setup lang="ts">
import type { ContactLink } from '#shared/content'
import { getLinkTarget, isExternalLink } from '#shared/utils/links'

defineProps<{
  locationLabel: string
  location: string
  links: ContactLink[]
}>()
</script>

<template>
  <div class="divide-y divide-default border-y border-default">
    <div class="flex items-center gap-4 py-4">
      <span class="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/10">
        <UIcon name="i-ri-map-pin-line" class="size-5 text-primary" />
      </span>
      <div class="min-w-0">
        <p class="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ locationLabel }}
        </p>
        <p class="mt-1 text-sm font-medium text-highlighted">
          {{ location }}
        </p>
      </div>
    </div>

    <div v-for="link in links" :key="link.id" class="flex items-center gap-4 py-4">
      <span class="flex size-10 shrink-0 items-center justify-center rounded-sm bg-primary/10">
        <UIcon :name="link.icon" class="size-5 text-primary" />
      </span>
      <div class="min-w-0">
        <p class="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          {{ link.label }}
        </p>
        <ULink
          :to="link.to"
          :external="isExternalLink(link.to)"
          :target="getLinkTarget(link.to)"
          class="-my-2 mt-1 inline-flex min-h-11 max-w-full items-center truncate py-2 text-sm font-medium text-highlighted hover:text-primary sm:min-h-0 sm:py-0"
        >
          {{ link.value }}
        </ULink>
      </div>
    </div>
  </div>
</template>
