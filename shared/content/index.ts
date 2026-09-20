import { en } from './en'
import { fr } from './fr'
import type { LocaleCode, PortfolioContent } from './types'

export * from './types'

export const contentByLocale = { fr, en } satisfies Record<LocaleCode, PortfolioContent>

export function getPortfolioContent(locale: string): PortfolioContent {
  return contentByLocale[locale as LocaleCode] ?? fr
}
