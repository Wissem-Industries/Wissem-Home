import { MOTION_PRESETS } from '~/composables/useMotionPresets'

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
        {
          threshold: MOTION_PRESETS.reveal.threshold,
          rootMargin: MOTION_PRESETS.reveal.rootMargin,
        },
      )

  function observeReveals(root: ParentNode = document) {
    const reveals = root.querySelectorAll<HTMLElement>('.reveal:not([data-reveal-bound])')

    for (const element of reveals) {
      element.dataset.revealBound = 'true'
      if (reduceMotion || !observer) {
        element.dataset.visible = 'true'
        continue
      }
      observer.observe(element)
    }
  }

  let mutationObserver: MutationObserver | undefined
  let scanFrame: number | undefined

  function scheduleRevealScan() {
    if (scanFrame !== undefined) cancelAnimationFrame(scanFrame)
    scanFrame = requestAnimationFrame(() => {
      scanFrame = undefined
      observeReveals()
    })
  }

  nuxtApp.hook('app:mounted', () => {
    observeReveals()
    mutationObserver = new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.addedNodes.length > 0)) scheduleRevealScan()
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })
  })
  nuxtApp.hook('page:finish', () => {
    scheduleRevealScan()
  })
  nuxtApp.vueApp.onUnmount(() => {
    mutationObserver?.disconnect()
    observer?.disconnect()
    if (scanFrame !== undefined) cancelAnimationFrame(scanFrame)
  })
})
