<script setup>
import { ref } from 'vue'

import { showModal } from '@/components/shareds/modal/useModal'
import { createToast } from '@/components/shareds/notify/useToast'

import AppSection from '@/components/shareds/AppSection.vue'
import BaseIcon from '@/components/shareds/BaseIcon.vue'

import List from './partials/List.vue'
import Form from './partials/Form.vue'

import tasks from './tasks'

const isModalVisible = ref(false)
const currentItem = ref({})
const items = ref([...tasks])
const loading = ref(false)

const edit = item => {
  currentItem.value = { ...item }
  isModalVisible.value = true
}

const add = () => {
  currentItem.value = { id: null, name: '' }
  isModalVisible.value = true
}

const save = item => {
  loading.value = true
  setTimeout(() => {
    if (item.id) {
      const index = items.value.findIndex(i => i.id === item.id)
      if (index !== -1) {
        items.value[index] = { ...item }
      }
    } else {
      item.id = items.value.length + 1
      items.value.push(item)
    }
    loading.value = false
    close()
    createToast('Tarefa salva com sucesso!.', true)
  }, 1000)
}

const remove = async itemId => {
  const useConfirmed = await showModal(
    `Tem certeza que deseja excluir a tarefa: Selecionada?`
  )

  if (useConfirmed) {
    items.value = items.value.filter(item => item.id !== itemId)
    createToast('Tarefa excluída com sucesso!.', true)
  }
}

const close = () => {
  currentItem.value = {}
  isModalVisible.value = false
}
</script>
<template>
  <AppSection>
    <template #header>
      <h2 class="mb-0">Minhas Tarefas</h2>
      <button class="btn btn-primary btn-icon" @click="add">
        <BaseIcon name="CirclePlus" class="w-5" />
      </button>
    </template>
    <template #content>
      <List
        :items="items"
        @edit="edit"
        @add="add"
        @remove="remove"
        :loading="loading"
      />

      <Form
        :item="currentItem"
        :is-visible="isModalVisible"
        @save="save"
        @close="close"
        :loading="loading"
      />
    </template>
  </AppSection>
</template>
+
