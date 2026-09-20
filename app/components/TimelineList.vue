<script setup lang="ts">
interface TimelineEntry {
  eyebrow: string
  title: string
  period: string
  location?: string
  thumbnail?: string
  bullets: string[]
}

defineProps<{ items: TimelineEntry[] }>()
</script>

<template>
  <div class="divide-y divide-default border-y border-default">
    <article
      v-for="item in items"
      :key="`${item.eyebrow}-${item.title}`"
      v-reveal
      class="grid gap-5 py-7 lg:grid-cols-[minmax(0,1fr)_13rem] lg:gap-10"
    >
      <div class="space-y-4">
        <div class="space-y-2">
          <p class="font-mono text-xs uppercase tracking-[0.18em] text-primary">
            {{ item.eyebrow }}
          </p>
          <h3 class="text-lg font-medium text-highlighted">
            {{ item.title }}
          </h3>
        </div>

        <ul class="space-y-2 text-sm leading-6 text-muted">
          <li v-for="bullet in item.bullets" :key="bullet" class="flex gap-3">
            <span class="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
            <span>{{ bullet }}</span>
          </li>
        </ul>
      </div>

      <div class="flex items-start justify-between gap-5 lg:flex-col lg:items-end">
        <img
          v-if="item.thumbnail"
          :src="item.thumbnail"
          :alt="item.eyebrow"
          width="112"
          height="56"
          loading="lazy"
          decoding="async"
          class="h-12 w-24 object-contain object-left lg:h-14 lg:w-28 lg:object-right"
        >
        <div class="space-y-2 text-right text-xs text-muted">
          <p class="flex items-center justify-end gap-2">
            <UIcon name="i-ri-calendar-line" class="size-4 text-primary" />
            <span>{{ item.period }}</span>
          </p>
          <p v-if="item.location" class="flex items-center justify-end gap-2">
            <UIcon name="i-ri-map-pin-line" class="size-4 text-primary" />
            <span>{{ item.location }}</span>
          </p>
        </div>
      </div>
    </article>
  </div>
</template>
