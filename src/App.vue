<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { useInformationStore } from './stores/user'

const store = useInformationStore()

</script>

<template>
  <div class="d-flex justify-center">
    <nav class="pe-5">
        <v-card min-width="180">
          <v-list>
            <RouterLink to="/">
              <v-list-item prependIcon="mdi-home" color="purple">Home</v-list-item>
            </RouterLink>
            <RouterLink to="/personal">
              <v-list-item prependIcon="mdi-badge-account">Pessoal</v-list-item>
            </RouterLink>
            <RouterLink to="/experiences">
              <v-list-item prependIcon="mdi-briefcase-variant">Experiência</v-list-item>
            </RouterLink>
            <RouterLink to="/courses">
              <v-list-item prependIcon="mdi-school">Cursos</v-list-item>
            </RouterLink>
            <RouterLink to="/skills">
              <v-list-item prependIcon="mdi-certificate">Habilidades</v-list-item>
            </RouterLink>
          </v-list>
        </v-card>
    </nav>
    <div class="router-content">
      <RouterView />
    </div>  
  </div>  
</template>

<style scoped>
  a {
    text-decoration: none !important;
  }
  .router-link-active, .router-link-exact-active {
    color: #9C27B0;
  }
  .router-content {
    width: 100%;
  }
</style>
