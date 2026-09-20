<script setup lang="ts">
import type { ContactErrorCode, ContactField, ContactPayload } from '#shared/utils/contact'
import { createEmptyContactPayload, getContactFieldErrors } from '#shared/utils/contact'

const { content } = usePortfolioContent()
const { canonicalUrl, siteUrl } = useSiteSeo()
const toast = useToast()
const { revealStyle } = useMotionPresets()
const loading = ref(false)
const submitted = ref(false)
const state = reactive<ContactPayload>(createEmptyContactPayload())
const errors = computed(() => new Set(getContactFieldErrors(state).map((error) => error.name)))

function fieldError(field: ContactField) {
  return submitted.value && errors.value.has(field)
    ? content.value.contact.validation[field]
    : undefined
}

function getErrorMessage(code?: ContactErrorCode) {
  if (code === 'RATE_LIMITED') return content.value.contact.messages.rateLimited
  if (code === 'INVALID_PAYLOAD') return content.value.contact.messages.invalidPayload
  if (code === 'SERVICE_UNAVAILABLE') return content.value.contact.messages.unavailable
  return content.value.contact.messages.errorDescription
}

async function onSubmit() {
  submitted.value = true
  if (errors.value.size > 0 || loading.value) return

  loading.value = true
  try {
    await $fetch('/api/contact', { method: 'POST', body: state })
    toast.add({
      title: content.value.contact.messages.successTitle,
      description: content.value.contact.messages.successDescription,
      color: 'success',
    })
    Object.assign(state, createEmptyContactPayload())
    submitted.value = false
  } catch (error) {
    const code = (error as { data?: { data?: { code?: ContactErrorCode } } }).data?.data?.code
    toast.add({
      title: content.value.contact.messages.errorTitle,
      description: getErrorMessage(code),
      color: 'error',
    })
  } finally {
    loading.value = false
  }
}

usePageSeo(
  computed(() => ({
    title: content.value.pages.contact.title,
    description: content.value.pages.contact.description,
  })),
)

useBreadcrumbJsonLd(
  computed(() => [
    { name: content.value.navigation.home, item: siteUrl.value },
    { name: content.value.pages.contact.heading, item: canonicalUrl.value },
  ]),
)
</script>

<template>
  <UContainer>
    <header
      class="reveal reveal--hero max-w-3xl space-y-5 pb-14 pt-8 sm:pb-20 sm:pt-14"
      :style="revealStyle()"
    >
      <p class="font-mono text-xs uppercase tracking-[0.2em] text-primary">
        {{ content.pages.contact.eyebrow }}
      </p>
      <h1 class="text-5xl font-semibold tracking-[-0.05em] text-highlighted sm:text-6xl">
        {{ content.contact.title }}
      </h1>
      <p class="max-w-2xl text-base leading-7 text-muted sm:text-lg">
        {{ content.contact.description }}
      </p>
    </header>

    <section class="grid items-stretch gap-5 border-t border-default py-12 lg:grid-cols-[22rem_minmax(0,1fr)] lg:py-16">
      <UCard class="motion-card reveal h-full" :style="revealStyle(0)">
        <div class="space-y-6">
          <div class="space-y-2">
            <h2 class="text-lg font-medium text-highlighted">{{ content.contact.sidebarTitle }}</h2>
            <p class="text-sm leading-6 text-muted">{{ content.contact.sidebarDescription }}</p>
          </div>
          <ContactDetails
            :location-label="content.profile.locationLabel"
            :location="content.profile.location"
            :links="content.links"
          />
        </div>
      </UCard>

      <UCard class="motion-card reveal h-full" :style="revealStyle(1)">
        <UForm :state="state" class="space-y-6" @submit="onSubmit">
          <div class="grid gap-5 sm:grid-cols-2">
            <UFormField
              name="name"
              :label="content.contact.fields.name.label"
              :error="fieldError('name')"
              required
            >
              <UInput
                v-model="state.name"
                :placeholder="content.contact.fields.name.placeholder"
                autocomplete="name"
                class="w-full"
              />
            </UFormField>
            <UFormField
              name="email"
              :label="content.contact.fields.email.label"
              :error="fieldError('email')"
              required
            >
              <UInput
                v-model="state.email"
                type="email"
                :placeholder="content.contact.fields.email.placeholder"
                autocomplete="email"
                class="w-full"
              />
            </UFormField>
          </div>

          <UFormField
            name="subject"
            :label="content.contact.fields.subject.label"
            :error="fieldError('subject')"
            required
          >
            <UInput
              v-model="state.subject"
              :placeholder="content.contact.fields.subject.placeholder"
              class="w-full"
            />
          </UFormField>

          <UFormField
            name="message"
            :label="content.contact.fields.message.label"
            :error="fieldError('message')"
            required
          >
            <UTextarea
              v-model="state.message"
              :placeholder="content.contact.fields.message.placeholder"
              :rows="9"
              class="w-full"
            />
          </UFormField>

          <div class="flex flex-col gap-4 border-t border-default pt-6 sm:flex-row sm:items-center sm:justify-between">
            <UTooltip :text="content.contact.privacyHint">
              <div class="flex max-w-sm items-start gap-2 text-xs leading-5 text-muted">
                <UIcon name="i-ri-information-line" class="mt-0.5 size-4 shrink-0" />
                <span>{{ content.contact.responseHint }}</span>
                <span class="sr-only">{{ content.contact.privacyAriaLabel }}</span>
              </div>
            </UTooltip>
            <UButton
              type="submit"
              :label="content.contact.submit"
              :loading="loading"
              :disabled="loading || (submitted && errors.size > 0)"
              trailing-icon="i-ri-send-plane-line"
              size="lg"
              class="min-h-11 justify-center sm:min-h-0 sm:min-w-52"
            />
          </div>
        </UForm>
      </UCard>
    </section>
  </UContainer>
</template>
