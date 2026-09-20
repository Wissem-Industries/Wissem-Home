import { describe, expect, test } from 'bun:test'
import {
  createEmptyContactPayload,
  getContactFieldErrors,
  isContactPayloadValid,
  normalizeContactPayload,
} from './contact'

describe('contact payload validation', () => {
  test('starts invalid', () => {
    expect(getContactFieldErrors(createEmptyContactPayload()).map((error) => error.name)).toEqual([
      'name',
      'email',
      'subject',
      'message',
    ])
  })

  test('normalizes and accepts a complete payload', () => {
    const value = normalizeContactPayload({
      name: '  Wissem  ',
      email: ' contact@example.com ',
      subject: ' Hello ',
      message: ' A useful message with enough characters. ',
    })

    expect(value.name).toBe('Wissem')
    expect(isContactPayloadValid(value)).toBe(true)
  })
})
