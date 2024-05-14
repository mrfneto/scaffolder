<script setup>
import AppSection from '@/components/shareds/AppSection.vue'
import BaseIcon from '@/components/shareds/BaseIcon.vue'

import List from './partials/List.vue'
import Form from './partials/Form.vue'

import useCrud from './useCrud'

const {
  isVisible,
  items,
  loading,
  currentItem,
  add,
  edit,
  save,
  remove,
  close
} = useCrud()
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
      <!-- List -->
      <List :items="items" @edit="edit" @remove="remove" :loading="loading" />
      <!-- Form -->
      <Form
        :is-visible="isVisible"
        :item="currentItem"
        @save="save"
        @close="close"
        :loading="loading"
      />
    </template>
  </AppSection>
</template>
+
