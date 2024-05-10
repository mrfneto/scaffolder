<script setup>
import AppMain from '@/components/shareds/AppMain.vue'
import AppLogo from '@/components/shareds/AppLogo.vue'
</script>
<template>
  <div class="flex-1 flex flex-col items-center justify-start pt-16 space-y-6">
    <AppLogo />
    <div
      class="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0"
    >
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <AppMain />
      </div>
    </div>
  </div>
</template>
