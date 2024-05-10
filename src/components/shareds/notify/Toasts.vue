<script setup>
import { useToastState } from './useToast'
import Toast from './Toast.vue'

const toasts = useToastState()
</script>

<template>
  <div
    class="fixed right-8 top-8 z-50 flex flex-col items-center min-h-24 space-y-2"
  >
    <Toast v-for="(toast, index) of toasts" :key="index" :toast="toast">
    </Toast>
  </div>
</template>
