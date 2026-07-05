<template>
  <v-sheet class="pa-5">
    <v-form fast-fail @submit.prevent="addEducation" id="educationForm" :disabled="!showForm">
      <div class="text-h6 text-center">Adicionar Curso</div>
      <v-select name="level" label="Selecionar" :rules="levelRules" prepend-inner-icon="mdi-school"
        :items="['Curso Técnico', 'Graduação', 'Especialização', 'Mestrado', 'Doutorado']" required>
        <template v-slot:counter></template>
      </v-select>
      <v-text-field name="title" label="Título" maxlength="30" :rules="titleRules" required
        prepend-inner-icon="mdi-certificate"></v-text-field>
      <v-text-field name="school" label="Escola" maxlength="30" :rules="schoolRules" required
        prepend-inner-icon="mdi-chair-school"></v-text-field>
      <v-text-field name="completion" label="Ano de conclusão" maxlength="4" :rules="completionRules" required
        prepend-inner-icon="mdi-calendar-range"></v-text-field>          
      <v-btn type="submit" prepend-icon="mdi-book-plus" block class="mt-2 bg-primary" :disabled="!showForm">Adicionar</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>

  import { onMounted, ref } from 'vue'
  import { useInformationStore } from '../stores/user'  

  const store = useInformationStore()
  const showForm = ref(true)

  onMounted(() => {
    if(store.educations.length > 2) {
      showForm.value = false
    }
  })

  const titleRules = [
    value => {
    if(value?.trim().length > 2) return true
      return 'Título deve conter pelo menos 3 caracteres'            
    }
  ]

  const schoolRules = [
    value => {
      if(value?.trim().length > 2) return true
      return 'Escola deve conter pelo menos 3 caracteres'
    }
  ]

  const levelRules = [
    value => {
      if(value?.length > 0) return true
      return 'Selecione uma opção'            
    }
  ]

  const completionRules = [
    value => {
      if(/^\d+$/.test(value) && value?.length === 4) return true
      return 'Ano de conclusão deve conter 4 dígitos'
    }
  ]

  async function addEducation(submitEventPromise) {
    
    const { valid } = await submitEventPromise    
    
    if(valid && store.educations.length < 3) {
      const form = document.querySelector("#educationForm")      
      const level = form.level.value      
      const title = form.title.value
      const school = form.school.value
      const completion = form.completion.value      
      const education = { level, title, school, completion }
      store.addEducations(education)
      form.reset()
      if(store.educations.length > 2) {
        showForm.value = false
      }
    }

  }

</script>
