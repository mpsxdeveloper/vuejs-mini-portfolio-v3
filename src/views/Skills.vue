<template>
  <v-sheet class="pa-5">
    <div class="text-h6 text-center">Adicionar Habilidades</div>
    <v-select name="level" label="Selecionar habilidade" @update:modelValue="addSkill" prepend-inner-icon="mdi-list-box"
      return-object :items="itens" item-title="title" item-value="icon">
        <template v-slot:counter></template>
    </v-select>
  </v-sheet>
</template>

<script setup>

import { ref } from "vue"
import { useInformationStore } from '../stores/user'  
const store = useInformationStore()

const itens = ref([
    { title: 'Bootstrap', icon: 'mdi-bootstrap' },
    { title: 'CSS', icon: 'mdi-language-css3' },
    { title: 'HTML', icon: 'mdi-language-html5'},
    { title: 'JavaScript', icon: 'mdi-language-javascript' },
    { title: 'PHP', icon: 'mdi-language-php' },
    { title: 'Laravel', icon: 'mdi-laravel' },
    { title: 'Node.js', icon: 'mdi-nodejs' },
    { title: 'Nuxt', icon: 'mdi-nuxt' },
    { title: 'Vue.js', icon: 'mdi-vuejs' },
    { title: 'Vuetify', icon: 'mdi-vuetify' },
    { title: 'Unity', icon: 'mdi-unity' }
  ])

  function addSkill(skill) {
    
    const added = store.addSkills(skill)    
    if(added) {
        itens.value = itens.value.filter(item => item.title !== skill.title)
    }   

  }

</script>
