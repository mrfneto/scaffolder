import { reactive } from 'vue'
const toasts = reactive([])

export const createToast = (message, success = false) => {
  toasts.push({ message: message, success: success })
}

export const clearToast = toast => {
  const index = toasts.findIndex(toast => toast === toast)
  toasts.splice(index, 1)
}

export const useToastState = () => toasts
