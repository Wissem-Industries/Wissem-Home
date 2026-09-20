<script setup lang="ts">
const { content } = usePortfolioContent()
const { canonicalUrl, siteUrl } = useSiteSeo()

usePageSeo(
  computed(() => ({
    title: content.value.pages.projects.title,
    description: content.value.pages.projects.description,
  })),
)

useBreadcrumbJsonLd(
  computed(() => [
    { name: content.value.navigation.home, item: siteUrl.value },
    { name: content.value.pages.projects.heading, item: canonicalUrl.value },
  ]),
)
</script>

<template>
  <UContainer>
    <header class="max-w-3xl space-y-5 pb-14 pt-8 sm:pb-20 sm:pt-14">
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {{ content.pages.projects.eyebrow }}
      </p>
      <h1 class="text-5xl font-semibold tracking-[-0.05em] text-highlighted sm:text-6xl">
        {{ content.pages.projects.heading }}
      </h1>
      <p class="max-w-2xl text-base leading-7 text-muted sm:text-lg">
        {{ content.pages.projects.description }}
      </p>
    </header>

    <section class="space-y-6 border-t border-default py-12 sm:py-16">
      <div v-for="(project, index) in content.projects" :key="project.id" class="reveal">
        <ProjectCard
          :project="project"
          :actions="content.projectActions"
          :reverse="index % 2 === 1"
          :eager="index === 0"
        />
      </div>
    </section>
  </UContainer>
</template>
