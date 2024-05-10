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
    <div>
      <h2 class="mb-0">Faça login em sua conta</h2>
      <p class="muted mb-6 text-sm">
        <span> Não tem uma conta?</span>
        <RouterLink class="btn btn-link" :to="{ name: 'Register' }">
          Inscreva-se
        </RouterLink>
      </p>
    </div>
    <FormSection title="Entrar" :loading="loading" block @submitted="onSubmit">
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
      <RouterLink class="btn btn-link btn-sm" :to="{ name: 'Recovery' }">
        Esqueceu a senha?
      </RouterLink>
    </p>
  </div>
</template>
