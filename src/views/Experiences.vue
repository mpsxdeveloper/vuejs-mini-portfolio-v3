<template>
  <v-sheet class="pa-5">
    <v-form fast-fail @submit.prevent="addExperience" id="experienceForm" :disabled="!showForm">
      <div class="text-h6 text-center">Adicionar Experiência</div>
      <v-text-field name="company" label="Empresa" :rules="companyRules" maxlength="30"
        prepend-inner-icon="mdi-office-building"></v-text-field>
      <v-text-field name="occupation" label="Cargo" :rules="occupationRules" maxlength="30"
        prepend-inner-icon="mdi-briefcase-variant"></v-text-field>
      <v-text-field name="from" label="Início (ano)" :rules="fromRules" maxlength="4" 
        prepend-inner-icon="mdi-calendar-range"></v-text-field>
      <v-text-field name="to" label="Término (ano)" :rules="toRules" maxlength="4"
        prepend-inner-icon="mdi-calendar-range"></v-text-field>
      <v-btn type="submit" prepend-icon="mdi-briefcase-plus" block class="mt-2 bg-primary" :disabled="!showForm">Adicionar</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>

  import { onMounted, ref } from 'vue'
  import { useInformationStore } from '../stores/user'  
    
  const store = useInformationStore()
  const showForm = ref(true)

  onMounted(() => {
    if(store.experiences.length > 2) {
      showForm.value = false
    }
  })
  
  const companyRules = [
    value => {
      if(value?.trim().length > 2) return true
      return 'Empresa deve conter pelo menos 3 caracteres'            
    }
  ]

  const occupationRules = [
    value => {
      if(value?.trim().length > 2) return true
      return 'Cargo deve ter pelo menos 3 caracteres'            
    }
  ]

  const fromRules = [
    value => {
      if(/^\d+$/.test(value) && value?.length === 4) return true
      return 'Início deve conter 4 dígitos'      
    }
  ]

  const toRules = [
    value => {
      if(/^\d+$/.test(value) && value?.length === 4) return true
      return 'Término deve conter 4 dígitos'
    }
  ]

  async function addExperience(submitEventPromise) {    
    const { valid } = await submitEventPromise    
    if(valid && store.experiences.length < 3) {
        const form = document.querySelector("#experienceForm")      
        const company = form.company.value
        const occupation = form.occupation.value
        const from = form.from.value
        const to = form.to.value
        const experience = { company, occupation, from, to }
        store.addExperiences(experience)
        form.reset()
        if(store.experiences.length > 2) {
          showForm.value = false
        }
    }
  }

</script>
