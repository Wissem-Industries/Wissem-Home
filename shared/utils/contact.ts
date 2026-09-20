export interface ContactPayload {
  name: string
  email: string
  subject: string
  message: string
}

export type ContactField = keyof ContactPayload
export type ContactErrorCode =
  | 'INVALID_PAYLOAD'
  | 'RATE_LIMITED'
  | 'SERVICE_UNAVAILABLE'
  | 'DELIVERY_FAILED'

export interface ContactFieldError {
  name: ContactField
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function trim(value?: string) {
  return value?.trim() || ''
}

export function createEmptyContactPayload(): ContactPayload {
  return { name: '', email: '', subject: '', message: '' }
}

export function normalizeContactPayload(input: Partial<ContactPayload>): ContactPayload {
  return {
    name: trim(input.name),
    email: trim(input.email),
    subject: trim(input.subject),
    message: trim(input.message),
  }
}

export function getContactFieldErrors(input: Partial<ContactPayload>): ContactFieldError[] {
  const value = normalizeContactPayload(input)
  const errors: ContactFieldError[] = []

  if (value.name.length < 2) errors.push({ name: 'name' })
  if (!EMAIL_PATTERN.test(value.email)) errors.push({ name: 'email' })
  if (value.subject.length < 3) errors.push({ name: 'subject' })
  if (value.message.length < 10) errors.push({ name: 'message' })

  return errors
}

export function isContactPayloadValid(input: Partial<ContactPayload>) {
  return getContactFieldErrors(input).length === 0
}
