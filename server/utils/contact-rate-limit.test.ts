import { beforeEach, describe, expect, test } from 'bun:test'
import { allowContactRequest, resetContactRateLimits } from './contact-rate-limit'

describe('contact rate limit', () => {
  beforeEach(resetContactRateLimits)

  test('allows five requests per window', () => {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      expect(allowContactRequest('127.0.0.1', 1_000)).toBe(true)
    }
    expect(allowContactRequest('127.0.0.1', 1_000)).toBe(false)
  })

  test('resets after five minutes', () => {
    for (let attempt = 0; attempt < 5; attempt += 1) {
      allowContactRequest('127.0.0.1', 1_000)
    }
    expect(allowContactRequest('127.0.0.1', 301_001)).toBe(true)
  })
})
