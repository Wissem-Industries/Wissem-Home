export function useJsonLd(key: string, input: MaybeRefOrGetter<Record<string, unknown>>) {
  useHead({
    script: [
      {
        key,
        type: 'application/ld+json',
        textContent: () => JSON.stringify(toValue(input)),
      },
    ],
  })
}

export function useBreadcrumbJsonLd(
  input: MaybeRefOrGetter<Array<{ name: string; item: string }>>,
) {
  useJsonLd(
    'breadcrumbs',
    computed(() => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: toValue(input).map((entry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: entry.name,
        item: entry.item,
      })),
    })),
  )
}
