import type { CSSProperties } from 'vue'

export const MOTION_PRESETS = {
  reveal: {
    threshold: 0.12,
    rootMargin: '0px 0px -8% 0px',
    staggerMs: 55,
    maxStaggerItems: 6,
  },
  interactive: {
    durationMs: 180,
  },
} as const

type RevealStyle = CSSProperties & { '--reveal-delay': string }

export function useMotionPresets() {
  function revealStyle(index = 0): RevealStyle {
    const order = Math.min(Math.max(index, 0), MOTION_PRESETS.reveal.maxStaggerItems)
    return { '--reveal-delay': `${order * MOTION_PRESETS.reveal.staggerMs}ms` }
  }

  return {
    revealStyle,
  }
}
