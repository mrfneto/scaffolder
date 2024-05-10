<script setup>
import { onMounted, ref } from 'vue'
import { clearToast } from './useToast'

import BaseIcon from '@/components/shareds/BaseIcon.vue'

const props = defineProps({
  toast: { type: Object, required: true }
})

const progress = ref(100)

const close = () => {
  const interval = setInterval(() => {
    progress.value -= 1
  }, 50)

  setTimeout(() => {
    console.log(progress.value)
    clearInterval(interval)
    clearToast(props.toast)
  }, 5000)
}

onMounted(() => {
  close()
})
</script>

<template>
  <div
    class="relative h-16 max-w-sm overflow-hidden rounded-lg shadow-md bg-gray-200"
  >
    <div class="flex">
      <!-- Icon -->
      <div
        class="flex items-center justify-center w-12 h-16"
        :class="toast.success ? 'bg-success-500' : 'bg-danger-500'"
      >
        <BaseIcon
          :name="toast.success ? 'CheckCircle' : 'AlertTriangle'"
          class="w-6 h-6 text-white mx-2"
        />
      </div>
      <!-- Text and progress -->
      <div class="flex items-center px-4 -mx-3">
        <div class="mx-3">
          <p class="text-sm text-gray-700 font-medium mb-0">
            {{ toast.message }}
          </p>
        </div>
        <div
          class="absolute bottom-0 left-12 h-1"
          :class="toast.success ? 'bg-success-500' : 'bg-danger-500'"
          :style="{ width: `${progress}%` }"
        ></div>
      </div>
    </div>
  </div>
</template>
