<script setup lang="ts">
import type { Project } from '#shared/content'
import { getLinkTarget, isExternalLink } from '#shared/utils/links'

defineProps<{
  project: Project
  actions: { view: string; repo: string; private: string }
  reverse?: boolean
  compact?: boolean
  eager?: boolean
}>()
</script>

<template>
  <UCard
    class="motion-card group h-full overflow-hidden"
    :ui="{
      body: compact ? 'p-0 sm:p-0' : 'p-0 sm:p-0',
    }"
  >
    <article
      class="grid h-full"
      :class="compact ? 'grid-rows-[12rem_1fr]' : 'lg:grid-cols-2'"
    >
      <div
        class="relative min-h-48 overflow-hidden bg-muted"
        :class="!compact && reverse ? 'lg:order-2' : undefined"
      >
        <img
          :src="project.image"
          :alt="project.title"
          :loading="eager ? 'eager' : 'lazy'"
          :fetchpriority="eager ? 'high' : 'auto'"
          width="960"
          height="540"
          decoding="async"
          referrerpolicy="no-referrer"
          class="project-media size-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
        >
        <span
          class="absolute left-3 top-3 rounded-full border border-white/15 bg-neutral-950/70 px-2.5 py-1 font-mono text-xs text-white backdrop-blur"
        >
          {{ project.date.slice(0, 4) }}
        </span>
      </div>

      <div class="flex min-w-0 flex-col p-5 sm:p-6 lg:p-8">
        <div class="space-y-3">
          <h3 class="text-xl font-semibold tracking-tight text-highlighted">
            {{ project.title }}
          </h3>
          <p class="text-sm leading-6 text-muted">
            {{ project.description }}
          </p>
        </div>

        <div class="mt-5 flex flex-wrap gap-2">
          <UBadge
            v-for="tag in project.tags"
            :key="`${project.id}-${tag}`"
            :label="tag"
            color="neutral"
            variant="soft"
            size="sm"
          />
        </div>

        <div class="mt-auto flex flex-wrap gap-2 pt-6">
          <UButton
            v-if="project.url"
            :label="actions.view"
            :to="project.url"
            :external="isExternalLink(project.url)"
            :target="getLinkTarget(project.url)"
            trailing-icon="i-ri-external-link-line"
            size="sm"
            class="min-h-11 sm:min-h-0"
          />
          <UButton
            v-if="project.repo"
            :label="actions.repo"
            :to="project.repo"
            :external="isExternalLink(project.repo)"
            :target="getLinkTarget(project.repo)"
            icon="i-ri-github-line"
            color="neutral"
            variant="outline"
            size="sm"
            class="min-h-11 sm:min-h-0"
          />
          <UButton
            v-if="!project.url && !project.repo"
            :label="actions.private"
            icon="i-ri-lock-line"
            color="neutral"
            variant="soft"
            size="sm"
            disabled
            class="min-h-11 sm:min-h-0"
          />
        </div>
      </div>
    </article>
  </UCard>
</template>
