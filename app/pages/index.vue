<script setup lang="ts">
import { getLinkTarget, isExternalLink } from '#shared/utils/links'

const { content } = usePortfolioContent()
const { canonicalUrl, siteUrl } = useSiteSeo()
const colorMode = useColorMode()
const toast = useToast()

const logo = computed(() =>
  colorMode.value === 'dark' ? '/images/Logo_White.svg' : '/images/Logo_Black.svg',
)
const featuredProjects = computed(() => {
  const ids = new Set(content.value.profile.featuredProjectIds)
  return content.value.projects.filter((project) => ids.has(project.id))
})
const experience = computed(() =>
  content.value.profile.experience.map((item) => ({
    eyebrow: item.organization,
    title: item.title,
    period: item.period,
    location: item.location,
    thumbnail: item.thumbnail,
    bullets: item.bullets,
  })),
)
const education = computed(() =>
  content.value.profile.education.map((item) => ({
    eyebrow: item.institution,
    title: item.title,
    period: item.period,
    location: item.location,
    thumbnail: item.thumbnail,
    bullets: item.details,
  })),
)

function announceResumeDownload() {
  toast.add({
    title: content.value.resume.label,
    description: content.value.resume.started,
    color: 'success',
  })
}

usePageSeo(
  computed(() => ({
    title: content.value.pages.home.title,
    description: content.value.pages.home.description,
    type: 'profile' as const,
  })),
)

useJsonLd(
  'profile-page',
  computed(() => ({
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${canonicalUrl.value}#profile-page`,
    url: canonicalUrl.value,
    name: content.value.pages.home.title,
    description: content.value.pages.home.description,
    isPartOf: { '@id': `${siteUrl.value}/#website` },
    mainEntity: { '@id': `${siteUrl.value}/#person` },
  })),
)
</script>

<template>
  <div>
    <UContainer>
      <section class="grid min-h-[calc(100vh-7rem)] items-center gap-8 pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:gap-16 lg:pb-24">
        <div class="space-y-8">
          <div class="space-y-5">
            <UBadge
              :label="content.profile.availability"
              icon="i-ri-checkbox-circle-line"
              color="success"
              variant="subtle"
            />

            <div class="space-y-4">
              <h1 class="max-w-3xl text-5xl font-semibold tracking-[-0.055em] text-highlighted sm:text-6xl lg:text-7xl">
                {{ content.profile.name }}
              </h1>
              <p class="max-w-2xl text-lg font-medium leading-8 text-highlighted sm:text-xl">
                {{ content.profile.status }}
              </p>
              <p class="max-w-2xl text-base leading-7 text-muted">
                {{ content.profile.objective }}
              </p>
              <p class="max-w-2xl text-base leading-7 text-muted">
                {{ content.profile.description }}
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <UButton
              :label="content.resume.label"
              :to="content.resume.href"
              :download="content.resume.filename"
              external
              icon="i-ri-download-line"
              color="neutral"
              variant="outline"
              size="lg"
              class="justify-center"
              @click="announceResumeDownload"
            />
            <UButton
              :label="content.profile.contactCta"
              to="/contact"
              trailing-icon="i-ri-arrow-right-line"
              size="lg"
              class="justify-center"
            />
          </div>

          <div class="flex flex-wrap items-center gap-1">
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
            />
          </div>
        </div>

        <div v-reveal class="relative mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
          <div class="absolute -inset-8 -z-10 bg-primary/10 blur-3xl" />
          <UCard :ui="{ body: 'p-8 sm:p-10' }">
            <div class="flex min-h-80 flex-col justify-between gap-12">
              <div class="flex items-start justify-between gap-6">
                <ClientOnly>
                  <img
                    :src="logo"
                    :alt="content.profile.avatarAlt"
                    width="112"
                    height="112"
                    class="size-28 object-contain"
                  >
                  <template #fallback><span class="block size-28" /></template>
                </ClientOnly>
                <span class="font-mono text-xs text-muted">WISSEM.PRO</span>
              </div>

              <div class="space-y-6">
                <p class="text-2xl font-medium leading-9 tracking-tight text-highlighted">
                  {{ content.profile.objective }}
                </p>
                <div class="flex items-center gap-3 border-t border-default pt-5 text-sm text-muted">
                  <UIcon name="i-ri-map-pin-line" class="size-5 text-primary" />
                  <span>{{ content.profile.location }}</span>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <section class="grid gap-8 border-t border-default py-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 lg:py-24">
        <SectionHeading :title="content.profile.aboutTitle" eyebrow="01" />
        <div v-reveal class="space-y-5 text-lg leading-8 text-muted">
          <p v-for="paragraph in content.profile.about" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </section>

      <section class="space-y-10 border-t border-default py-16 lg:py-24">
        <SectionHeading :title="content.profile.experienceTitle" eyebrow="02" />
        <TimelineList :items="experience" />
      </section>

      <section class="space-y-10 border-t border-default py-16 lg:py-24">
        <SectionHeading :title="content.profile.educationTitle" eyebrow="03" />
        <TimelineList :items="education" />
      </section>

      <section class="space-y-10 border-t border-default py-16 lg:py-24">
        <SectionHeading :title="content.profile.skillsTitle" eyebrow="04" />
        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <UCard
            v-for="group in content.profile.skills"
            :key="group.title"
            v-reveal
            class="h-full"
          >
            <div class="flex h-full flex-col gap-6">
              <div class="space-y-2">
                <h3 class="font-medium text-highlighted">{{ group.title }}</h3>
                <p class="text-sm leading-6 text-muted">{{ group.description }}</p>
              </div>
              <div class="mt-auto flex flex-wrap gap-2">
                <UBadge
                  v-for="item in group.items"
                  :key="`${group.title}-${item}`"
                  :label="item"
                  color="primary"
                  variant="subtle"
                  size="sm"
                />
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <section class="space-y-10 border-t border-default py-16 lg:py-24">
        <div class="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            :title="content.profile.projectsTitle"
            :description="content.profile.projectsDescription"
            eyebrow="05"
          />
          <UButton
            :label="content.profile.allProjects"
            to="/projects"
            color="neutral"
            variant="outline"
            trailing-icon="i-ri-arrow-right-line"
          />
        </div>
        <div class="grid gap-5 lg:grid-cols-3">
          <div v-for="(project, index) in featuredProjects" :key="project.id" v-reveal>
            <ProjectCard
              :project="project"
              :actions="content.projectActions"
              :eager="index === 0"
              compact
            />
          </div>
        </div>
      </section>

      <section class="grid gap-5 border-t border-default py-16 lg:grid-cols-3 lg:py-24">
        <UCard v-reveal class="h-full">
          <div class="space-y-6">
            <h2 class="text-lg font-medium text-highlighted">{{ content.profile.languagesTitle }}</h2>
            <div class="space-y-5">
              <div v-for="language in content.profile.languages" :key="language.name" class="space-y-2">
                <div class="flex items-center justify-between gap-3 text-sm">
                  <span class="font-medium text-highlighted">{{ language.name }}</span>
                  <span class="text-muted">{{ language.level }}</span>
                </div>
                <UProgress :model-value="language.value" size="sm" />
              </div>
            </div>
          </div>
        </UCard>

        <UCard v-reveal class="h-full">
          <div class="space-y-6">
            <h2 class="text-lg font-medium text-highlighted">{{ content.profile.interestsTitle }}</h2>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="interest in content.profile.interests"
                :key="interest"
                :label="interest"
                color="neutral"
                variant="soft"
              />
            </div>
          </div>
        </UCard>

        <UCard v-reveal class="h-full">
          <div class="space-y-5">
            <div class="space-y-2">
              <h2 class="text-lg font-medium text-highlighted">{{ content.profile.contactTitle }}</h2>
              <p class="text-sm leading-6 text-muted">{{ content.profile.contactDescription }}</p>
            </div>
            <ContactDetails
              :location-label="content.profile.locationLabel"
              :location="content.profile.location"
              :links="content.links.filter((link) => link.id === 'email')"
            />
            <UButton
              :label="content.profile.contactCta"
              to="/contact"
              trailing-icon="i-ri-arrow-right-line"
              class="w-full justify-center"
            />
          </div>
        </UCard>
      </section>
    </UContainer>
  </div>
</template>
