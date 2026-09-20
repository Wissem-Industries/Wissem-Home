<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()
const { content } = usePortfolioContent()

useSeoMeta({
  title: () => content.value.error.title,
  description: () => content.value.error.description,
  robots: 'noindex, nofollow',
})
</script>

<template>
  <UApp>
    <div class="flex min-h-screen items-center justify-center bg-default px-6">
      <div class="max-w-lg space-y-6 text-center">
        <p class="font-mono text-sm text-primary">404</p>
        <h1 class="text-4xl font-semibold tracking-tight text-highlighted">
          {{ content.error.title }}
        </h1>
        <p class="leading-7 text-muted">{{ content.error.description }}</p>
        <UButton
          :label="content.error.home"
          to="/"
          icon="i-ri-arrow-left-line"
          size="lg"
        />
      </div>
    </div>
  </UApp>
</template>
