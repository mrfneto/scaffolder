<script setup>
import { ref, watch } from 'vue'

import BaseModal from '@/components/shareds/modal/BaseModal.vue'
import FormSection from '@/components/shareds/FormSection.vue'
import FormInputs from '@/components/shareds/FormInputs.vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isVisible: {
    type: Boolean,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['save', 'close'])
const item = ref({ ...props.item })
const save = () => {
  emit('save', item.value)
}
const close = () => {
  emit('close')
}
watch(
  () => props.item,
  newValue => {
    item.value = { ...newValue }
  }
)
</script>
<template>
  <BaseModal :show="isVisible" max-width="md" @close="close">
    <template #header>
      <h3>{{ item.id ? 'Editar' : 'Cadastrar' }} Tarefas</h3>
    </template>
    <template #content>
      <FormSection @submitted="save" title="Salvar" :loading="loading">
        <div class="modal-content">
          <FormInputs
            type="text"
            id="description"
            v-model="item.description"
            label="Descrição"
            required
          />
        </div>
      </FormSection>
    </template>
  </BaseModal>
</template>
