export function isExternalLink(value?: string) {
  return Boolean(value && /^(https?:)?\/\//i.test(value))
}

export function getLinkTarget(value?: string) {
  return isExternalLink(value) ? '_blank' : undefined
}
