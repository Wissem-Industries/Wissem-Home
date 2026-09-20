import type { SeoContent } from '#shared/content'

export function usePageSeo(input: MaybeRefOrGetter<SeoContent & { type?: 'website' | 'profile' }>) {
  const { canonicalUrl, content, socialImageUrl } = useSiteSeo()
  const page = computed(() => toValue(input))

  useSeoMeta({
    title: () => page.value.title,
    description: () => page.value.description,
    author: 'Wissem Badraoui',
    robots: 'index, follow, max-image-preview:large',
    ogTitle: () => page.value.title,
    ogDescription: () => page.value.description,
    ogUrl: () => canonicalUrl.value,
    ogType: () => page.value.type || 'website',
    ogImage: () => socialImageUrl.value,
    ogImageAlt: () => content.value.meta.socialImageAlt,
    twitterTitle: () => page.value.title,
    twitterDescription: () => page.value.description,
    twitterCard: 'summary_large_image',
    twitterImage: () => socialImageUrl.value,
    twitterImageAlt: () => content.value.meta.socialImageAlt,
  })

  useHead({
    link: [{ rel: 'canonical', href: () => canonicalUrl.value }],
  })
}
