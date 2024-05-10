<script setup>
import FormSubmit from '@/components/shareds/FormSubmit.vue'

defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    requires: true
  }
})

defineEmits(['submitted'])
</script>
<template>
  <form
    @submit.prevent="$emit('submitted')"
    class="space-y-4 md:space-y-6 mb-4"
  >
    <div class="space-y-4">
      <slot />
    </div>
    <FormSubmit :block="block" :loading="loading">
      {{ title }}
    </FormSubmit>
  </form>
</template>
