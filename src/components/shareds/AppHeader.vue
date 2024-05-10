<script setup>
import AppLogo from '@/components/shareds/AppLogo.vue'
import BaseIcon from '@/components/shareds/BaseIcon.vue'
</script>
<template>
  <header class="relative">
    <nav
      class="min-h-[4rem] flex items-center w-full relative px-4 shadow-lg lg:rounded-lg"
    >
      <div class="justify-start w-1/2">
        <AppLogo />
        <!-- <slot name="start" /> -->
      </div>
      <div class="shrink-0">
        <slot name="center" />
      </div>
      <div class="justify-end w-1/2">
        <button class="btn btn-outline btn-icon" @click="$emit('handleClick')">
          <BaseIcon name="Menu" class="w-5" />
        </button>
        <slot name="end" />
      </div>
    </nav>
  </header>
</template>
<style scoped lang="postcss">
:where(nav > *:not(script, style)) {
  @apply inline-flex items-center;
}
</style>
