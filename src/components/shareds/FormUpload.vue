<script setup>
import { ref } from 'vue'

// Define as propriedades do componente
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  }
})

// Referência para o input de arquivo
const fileInput = ref(null)

// Função para acionar o clique no input de arquivo
const triggerFileInput = () => {
  fileInput.value.click()
}

const handleFileUpload = event => {
  this.file = event.target.files[0]
}
</script>

<template>
  <div :class="$attrs.class">
    <!-- Label opcional -->
    <label v-if="label" class="form-label" :for="id">{{ label }}:</label>

    <!-- Input de arquivo escondido -->
    <input
      :id="id"
      ref="fileInput"
      type="file"
      style="display: none"
      v-bind="{ ...$attrs, class: null }"
      @change="handleFileUpload"
    />

    <!-- Botão personalizado para selecionar arquivo -->
    <button
      type="button"
      @click="triggerFileInput"
      class="form-input form-upload text-sm"
    >
      Selecionar Arquivo
    </button>
    <!-- Exibir mensagem de erro se houver -->
    <div v-if="error" class="form-error">{{ error }}</div>
    <!-- Descrição opcional -->
    <p v-if="description" class="text-sm muted mt-1">
      {{ description }}
    </p>
  </div>
</template>
