const WINDOW_MS = 5 * 60 * 1000
const MAX_ATTEMPTS = 5

export interface RateLimitBucket {
  count: number
  startedAt: number
}

const buckets = new Map<string, RateLimitBucket>()

export function resetContactRateLimits() {
  buckets.clear()
}

export function allowContactRequest(key: string, now = Date.now()) {
  if (buckets.size > 256) {
    for (const [bucketKey, bucket] of buckets) {
      if (now - bucket.startedAt > WINDOW_MS) buckets.delete(bucketKey)
    }
  }

  const current = buckets.get(key)
  if (!current || now - current.startedAt > WINDOW_MS) {
    buckets.set(key, { count: 1, startedAt: now })
    return true
  }

  if (current.count >= MAX_ATTEMPTS) return false
  current.count += 1
  return true
}
