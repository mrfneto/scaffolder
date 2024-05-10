import { reactive } from 'vue'

// Estado inicial
const modalState = reactive({
  visible: false,
  massage: '',
  resolve: null
})

// Exibi o modal
export function showModal(message) {
  modalState.visible = true
  modalState.message = message

  return new Promise(resolve => {
    modalState.resolve = resolve
  })
}

export function confirmModal(response) {
  modalState.visible = false
  if (modalState.resolve) {
    modalState.resolve(response)
    modalState.resolve = null
  }
}

export const useModalState = () => modalState
