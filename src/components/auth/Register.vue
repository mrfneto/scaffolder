<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import FormSection from '@/components/shareds/FormSection.vue'
import FormInputs from '@/components/shareds/FormInputs.vue'

const router = useRouter()

const form = ref({})
const loading = ref(false)

const onSubmit = () => {
  loading.value = true
  setTimeout(() => {
    console.log(form.value)
    router.replace({ name: 'Home' })
    loading.value = false
  }, 1500)
}
</script>
<template>
  <div>
    <h2 class="mb-8">Crie sua conta</h2>

    <FormSection
      title="Criar conta"
      :loading="loading"
      block
      @submitted="onSubmit"
    >
      <div class="grid grid-cols-2 gap-4">
        <FormInputs
          type="text"
          id="firstName"
          label="Nome"
          v-model="form.firstName"
          required
        />
        <FormInputs
          type="text"
          id="lastName"
          label="Sobrenome"
          v-model="form.lastName"
          required
        />
      </div>

      <FormInputs
        type="email"
        id="email"
        label="E-mail"
        v-model="form.email"
        required
      />
      <FormInputs
        type="password"
        id="password"
        label="Senha"
        v-model="form.password"
        required
      />
    </FormSection>

    <p class="muted mb-0 text-sm">
      <RouterLink class="btn btn-link" :to="{ name: 'Login' }">
        já tem uma conta?
      </RouterLink>
    </p>
  </div>
</template>
