export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server) return

  document.documentElement.classList.add('reveal-enabled')
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const observer = reduceMotion
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

  function observeReveals() {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal:not([data-reveal-bound])')

    for (const element of reveals) {
      element.dataset.revealBound = 'true'
      if (reduceMotion || !observer) {
        element.dataset.visible = 'true'
        continue
      }
      observer.observe(element)
    }
  }

  nuxtApp.hook('app:mounted', observeReveals)
  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(observeReveals)
  })
})
