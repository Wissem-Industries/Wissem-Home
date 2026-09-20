export default defineEventHandler((event) => {
  appendResponseHeader(event, 'vary', 'Accept-Language, Cookie')
})
