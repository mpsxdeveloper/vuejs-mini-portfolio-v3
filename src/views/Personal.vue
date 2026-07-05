<template>
  <v-sheet class="pa-5">
    <v-form>
      <div class="text-h6 text-center">Dados Pessoais</div>      
      <v-text-field name="name" label="Nome" maxlength="50" v-model="store.user.name" 
        prepend-inner-icon="mdi-account"></v-text-field>
      <v-text-field name="phone" label="Telefone" maxlength="15" v-model="store.user.phone" 
        prepend-inner-icon="mdi-phone"></v-text-field>      
      <v-text-field name="email" label="E-mail" maxlength="50" v-model="store.user.email" 
        prepend-inner-icon="mdi-at"></v-text-field>
      <v-text-field name="github" label="GitHub" maxlength="50" v-model="store.user.github" 
        prepend-inner-icon="mdi-github"></v-text-field>
      <v-text-field name="website" label="Website" maxlength="50" v-model="store.user.website" 
        prepend-inner-icon="mdi-web"></v-text-field>
    </v-form>
  </v-sheet>
</template>

<script setup>

  import { useInformationStore } from '../stores/user'  
  const store = useInformationStore()

</script>
