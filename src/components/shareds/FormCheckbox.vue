<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  modelValue: {
    type: Boolean,
    default: false
  },
  label: String,
  description: String
})

const emit = defineEmits(['update:modelValue'])

const isChecked = ref(props.modelValue)

const toggleCheckbox = () => {
  isChecked.value = !isChecked.value
  emit('update:modelValue', isChecked.value)
}
</script>

<template>
  <div class="checkbox-wrapper" :class="$attrs.class">
    <input
      type="checkbox"
      :id="id"
      :checked="isChecked"
      @change="toggleCheckbox"
      class="rounded border-gray-300 text-primary-600 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
      v-bind="{ ...$attrs, class: null }"
    />
    <label :for="id" v-if="label" class="checkbox-label">{{ label }}</label>
    <p v-if="description" class="checkbox-description">{{ description }}</p>
  </div>
</template>

<!-- how to use:

<FormCheckbox
      id="example-checkbox"
      v-model="isChecked"
      label="Aceitar termos e condições"
      description="Você deve aceitar os termos e condições para continuar."
    /> -->
