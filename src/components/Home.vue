<script setup>
import { ref } from 'vue'
import AppSection from '@/components/shareds/AppSection.vue'

const name = ref('')
</script>
<template>
  <AppSection>
    <template #header>
      <h2 class="mb-0">Home</h2>
    </template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta
        ea eaque cumque, nisi debitis repellat et eligendi culpa voluptates nemo
        unde porro illo a nam quos eos assumenda id.
      </p>
    </template>
  </AppSection>
</template>
+
