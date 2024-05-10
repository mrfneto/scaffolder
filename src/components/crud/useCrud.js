import { ref } from 'vue'

import { showModal } from '@/components/shareds/modal/useModal'
import { createToast } from '@/components/shareds/notify/useToast'

import tasks from './tasks'

export default function useCrud() {
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

  return {
    isModalVisible,
    loading,
    items,
    currentItem,
    add,
    edit,
    save,
    remove,
    close
  }
}
