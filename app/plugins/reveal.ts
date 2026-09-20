export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined
  let reduceMotion = true

  if (import.meta.client) {
    document.documentElement.classList.add('reveal-enabled')
    reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    observer = reduceMotion
      ? undefined
      : new IntersectionObserver(
          (entries) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) continue
              ;(entry.target as HTMLElement).dataset.visible = 'true'
              observer?.unobserve(entry.target)
            }
          },
          { threshold: 0.16 },
        )
  }

  nuxtApp.vueApp.directive('reveal', {
    getSSRProps() {
      return { class: 'reveal' }
    },
    mounted(element: HTMLElement) {
      element.classList.add('reveal')
      if (reduceMotion || !observer) {
        element.dataset.visible = 'true'
        return
      }
      observer.observe(element)
    },
    unmounted(element: HTMLElement) {
      observer?.unobserve(element)
    },
  })
})
