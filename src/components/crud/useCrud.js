import { reactive, ref, toRefs } from 'vue'

import { showModal } from '@/components/shareds/modal/useModal'
import { createToast } from '@/components/shareds/notify/useToast'

import tasks from './tasks'

export default function useCrud() {
  // atribui os states
  const states = reactive({
    isVisible: false,
    items: [...tasks],
    currentItem: {},
    loading: false
  })

  // abri a tela de cadastro de um novo registro
  const add = () => {
    console.log('add')
    states.currentItem = { id: null, name: '' }
    states.isVisible = true
  }

  //Abre a tela de edição de um registro existente
  const edit = item => {
    console.log('edit')
    states.currentItem = { ...item }
    states.isVisible = true
  }

  // Cadastra ou edita um registro
  const save = item => {
    states.loading = true
    setTimeout(() => {
      if (item.id) {
        const index = states.items.findIndex(i => i.id === item.id)
        if (index !== -1) {
          states.items[index] = { ...item }
        }
      } else {
        item.id = states.items.length + 1
        states.items.push(item)
      }
      states.loading = false
      close()
      createToast('Tarefa salva com sucesso!.', true)
    }, 1000)
  }

  // Excluir um registro
  const remove = async itemId => {
    const useConfirmed = await showModal(
      `Tem certeza que deseja excluir a tarefa: Selecionada?`
    )

    if (useConfirmed) {
      states.items = states.items.filter(item => item.id !== itemId)
      createToast('Tarefa excluída com sucesso!.', true)
    }
  }

  // Fecha e limpa o formulário
  const close = () => {
    states.currentItem = {}
    states.isVisible = false
  }

  return {
    ...toRefs(states),
    add,
    edit,
    save,
    remove,
    close
  }
}
