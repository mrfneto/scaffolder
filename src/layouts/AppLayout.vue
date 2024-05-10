<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AppSidebar from '@/components/shareds/AppSidebar.vue'
import AppHeader from '@/components/shareds/AppHeader.vue'
import AppMain from '@/components/shareds/AppMain.vue'
import BaseIcon from '@/components/shareds/BaseIcon.vue'
import ConfirmModal from '@/components/shareds/modal/ConfirmModal.vue'
import Toasts from '@/components/shareds/notify/Toasts.vue'

const route = useRoute()
const router = useRouter()

const sidebarShow = ref(false)

const doLogout = () => {
  router.replace({ name: 'Login' })
}
</script>
<template>
  <div class="flex-1 flex flex-col lg:flex-row">
    <!-- Sidebar -->
    <AppSidebar
      :user="{ displayName: 'Mrf Neto', email: 'mrfneto@gmail.com' }"
      permanent
      :show="sidebarShow"
      @close="sidebarShow = false"
    >
      <template #content>
        <RouterLink
          :to="{ name: 'Home' }"
          class="btn"
          :class="route.name === 'Home' && 'btn-primary'"
          >Home</RouterLink
        >
        <RouterLink
          :to="{ name: 'Crud' }"
          class="btn"
          :class="route.name === 'Crud' && 'btn-primary'"
          >Crud</RouterLink
        >
      </template>
      <!-- Sidebar Footer -->
      <template #footer>
        <button class="btn w-full text-danger-500" @click="doLogout">
          <BaseIcon name="LogOut" class="w-4 mr-4" />
          <span>Sair</span>
        </button>
      </template>
    </AppSidebar>

    <!-- Header -->
    <AppHeader @handle-click="sidebarShow = true" class="lg:hidden" />

    <!-- Main -->
    <div class="ml-0 lg:ml-80 flex-1">
      <AppMain />
    </div>
    <!-- Confime Moda Delete -->
    <ConfirmModal />
    <!-- Notifications -->
    <Toasts />
  </div>
</template>
