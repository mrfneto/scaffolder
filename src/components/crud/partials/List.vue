<script setup>
import { ref } from 'vue'

import BaseIcon from '@/components/shareds/BaseIcon.vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['edit', 'remove'])

const edit = item => {
  emit('edit', item)
}
const remove = itemId => {
  emit('remove', itemId)
}
</script>

<template>
  <div class="table-container">
    <table>
      <!-- Altere aqui -->
      <thead>
        <th scope="col px-4">
          <span class="sr-only">checkbox</span>
        </th>
        <th scope="col">Descrição</th>
        <th scope="col" class="float-right">
          <span class="sr-only">Actions</span>
        </th>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td class="w-4 pr-1">
            <input type="checkbox" v-model="item.completed" class="w-4" />
          </td>
          <th scope="row">
            <span :class="item.completed && 'line-through opacity-75'">
              {{ item.description }}</span
            >
          </th>
          <td class="space-x-2 float-right">
            <button
              class="btn btn-sm btn-icon sm hover:text-success-600"
              @click="edit(item)"
            >
              <BaseIcon name="Edit" class="w-4" />
            </button>
            <button
              class="btn btn-sm btn-icon hover:text-danger-600"
              @click="remove(item.id)"
            >
              <BaseIcon name="Trash" class="w-4" />
            </button>
          </td>
        </tr>
        <!-- Altere aqui -->
        <tr v-if="!items.length">
          <td class="text-center" colspan="3">
            <p class="mb-0 muted text-sm">Nenhuma tarefa encontrada.</p>
            <p class="mb-0 muted text-sm">Cadastre uma nova tarefa.</p>
          </td>
        </tr>
        <tr v-if="loading">
          <td class="text-center" colspan="3">
            <p class="mb-0 muted">Carregando...</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
