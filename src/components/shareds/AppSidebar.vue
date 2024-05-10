<script setup>
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted, watch } from 'vue'
import AppLogo from '@/components/shareds/AppLogo.vue'
defineProps({ show: Boolean, permanent: Boolean, user: Object })
const emit = defineEmits(['close'])

const route = useRoute()

watch(
  () => route.path,
  () => {
    emit('close')
  }
)

const close = () => {
  emit('close')
}

const closeOnEscape = e => {
  if (e.key === 'Escape') {
    close()
  }
}

onMounted(() => document.addEventListener('keydown', closeOnEscape))

onUnmounted(() => {
  document.removeEventListener('keydown', closeOnEscape)
  document.body.style.overflow = null
})

const getFirstLetterToName = name => {
  const arr = name.split(' ')
  return arr[0].substring(0, 1) + arr[1].substring(0, 1)
}
</script>
<template>
  <div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="$emit('close')"
        v-show="show"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          @click="$emit('close')"
          class="absolute inset-0 bg-black opacity-50 lg:hidden cursor-pointer"
          tabindex="0"
        ></div>
      </div>
    </transition>

    <aside
      :class="[
        show
          ? 'translate-x-0 opacity-100 '
          : permanent
          ? 'opacity-0 -translate-x-full lg:translate-x-0 lg:opacity-100'
          : 'opacity-0 -translate-x-full'
      ]"
      class="fixed inset-0 z-50 flex flex-col w-80 h-screen px-4 pt-8 pb-4 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l transition-all duration-300 ease-in-out"
    >
      <AppLogo class="mx-auto" />

      <div v-if="user" class="flex flex-col items-center mt-4 -mx-2">
        <img
          v-if="user.avatar"
          class="object-cover w-16 h-16 mx-2 rounded-full"
          :src="user?.avatar"
          alt="avatar"
        />
        <div
          v-else
          class="w-16 h-16 mx-2 bg-gray-200 text-primary-600 text-2xl font-bold rounded-full flex items-center justify-center"
        >
          <span>{{ getFirstLetterToName(user?.displayName) }}</span>
        </div>
        <h4 class="mx-2 mt-2 mb-0 font-medium text-gray-800">
          {{ user?.displayName }}
        </h4>
        <p class="mx-2 text-sm font-medium text-gray-500">
          {{ user?.email }}
        </p>
      </div>

      <div class="flex flex-col justify-between flex-1 my-6">
        <div class="flex flex-col flex-1 space-y-2">
          <slot name="content" />
        </div>
      </div>
      <div class="border-t border-gray-200 pt-4 space-y-2" v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </aside>
  </div>
</template>
