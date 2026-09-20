<template>
  <div class="min-h-screen bg-default text-default">
    <AppHeader />
    <main class="relative overflow-hidden pt-24 sm:pt-28">
      <div class="site-grid pointer-events-none absolute inset-x-0 top-0 -z-0 h-[42rem]" />
      <div class="relative z-1">
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>
