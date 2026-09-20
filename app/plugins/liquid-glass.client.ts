export default defineNuxtPlugin((nuxtApp) => {
  function bindLiquidGlass() {
    const surfaces = document.querySelectorAll<HTMLElement>('.glass-hover:not([data-liquid-bound])')

    for (const surface of surfaces) {
      surface.dataset.liquidBound = 'true'
      surface.addEventListener('pointermove', (event) => {
        const bounds = surface.getBoundingClientRect()
        surface.style.setProperty('--liquid-x', `${event.clientX - bounds.left}px`)
        surface.style.setProperty('--liquid-y', `${event.clientY - bounds.top}px`)
      })
      surface.addEventListener('pointerenter', () => {
        surface.style.setProperty('--liquid-active', '1')
      })
      surface.addEventListener('pointerleave', () => {
        surface.style.setProperty('--liquid-active', '0')
      })
    }
  }

  nuxtApp.hook('app:mounted', bindLiquidGlass)
  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(bindLiquidGlass)
  })
})
