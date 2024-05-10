<script setup>
import BaseIcon from '@/components/shareds/BaseIcon.vue'
defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  }
})
</script>
<template>
  <button
    class="btn btn-primary min-w-24"
    type="submit"
    :disabled="loading"
    :class="[block && 'w-full']"
  >
    <BaseIcon v-if="loading" name="LoaderCircle" class="w-6 animate-spin" />
    <slot v-else />
  </button>
</template>
<style scoped>
/* Spinner style for loading */
.spinner-border {
  border-top-color: transparent;
}
</style>
