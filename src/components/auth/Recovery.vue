<script setup>
import { ref } from 'vue'
import FormSection from '@/components/shareds/FormSection.vue'
import FormInputs from '@/components/shareds/FormInputs.vue'

const form = ref({})
const loading = ref(false)

const onSubmit = () => {
  console.log(form.value)
}
</script>
<template>
  <div>
    <div>
      <h2 class="mb-0">Esqueceu a senha?</h2>
      <p class="muted text-sm">
        Não se preocupe! digite seu e-mail e enviaremos um código para redefinir
        sua senha!
      </p>
    </div>
    <FormSection
      title="Redefinir senha"
      :loading="loading"
      block
      @submitted="onSubmit"
    >
      <FormInputs
        type="email"
        id="email"
        label="E-mail"
        v-model="form.email"
        required
      />
    </FormSection>

    <p class="muted mb-0 text-sm">
      <RouterLink class="btn btn-link btn-sm" :to="{ name: 'Login' }">
        Voltar ao login
      </RouterLink>
    </p>
  </div>
</template>
