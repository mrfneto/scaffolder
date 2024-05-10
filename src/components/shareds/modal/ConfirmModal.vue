<script setup>
import { useModalState, confirmModal } from './useModal'

import BaseModal from '@/components/shareds/modal/BaseModal.vue'

const modal = useModalState()

const confirm = response => {
  confirmModal(response)
}
</script>
<template>
  <BaseModal :show="modal.visible" max-width="md">
    <template #header>
      <h3 class="mb-0">Confimar</h3>
    </template>

    <template #content>
      <div class="space-y-8">
        <p>{{ modal.message }}</p>

        <div class="flex items-center justify-center space-x-4">
          <button class="btn btn-danger" @click="confirm(true)">
            Confirmar
          </button>
          <button type="button" class="btn btn-outline" @click="confirm(false)">
            Cancelar
          </button>
        </div>
      </div>
    </template>
  </BaseModal>
</template>
