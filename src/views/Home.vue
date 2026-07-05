<template>
  <div class="portfolio ps-2 pe-2 d-flex flex-column">     
      <v-sheet>        
          <v-card>                
                <v-sheet class="d-flex justify-center align-center">                  
                  <div class="pa-3">
                    <p v-if="store.user.name">
                      <v-icon icon="mdi-account"></v-icon> {{ store.user.name }}
                    </p>
                    <p v-if="store.user.phone">
                      <v-icon icon="mdi-phone"></v-icon> {{ store.user.phone }}                      
                    </p>
                    <p v-if="store.user.whatsapp">
                      <v-icon icon="mdi-whatsapp"></v-icon> {{ store.user.whatsapp }}                      
                    </p>
                    <p v-if="store.user.email">
                      <v-icon icon="mdi-at"></v-icon> {{ store.user.email }}                      
                    </p>
                    <p v-if="store.user.website">
                      <v-icon icon="mdi-web"></v-icon> {{ store.user.website }}                      
                    </p>
                    <p v-if="store.user.github">
                      <v-icon icon="mdi-github"></v-icon> {{ store.user.github }}
                    </p>
                  </div>
                </v-sheet>              
            <div class="d-flex">
              <v-card-text>
                <div class="font-weight-bold ms-1 mb-1 text-center">
                  <v-icon icon="mdi-briefcase-variant"></v-icon>
                </div>
                <v-timeline density="compact" align="start">
                  <v-timeline-item v-for="(experience, index) in store.experiences" :key="index" :dot-color="(index + 1) % 2 === 0 ? 'deep-purple-lighten-1' : 'green'" size="x-small">
                    <div class="mb-1">
                      <div class="font-weight-normal">
                        <strong>{{ experience.occupation }}</strong>
                      </div>
                      <div>{{ experience.company }} ({{ experience.from }} - {{ experience.to }})</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
              <v-card-text>
                <div class="font-weight-bold ms-1 mb-1 text-center">
                  <v-icon icon="mdi-school"></v-icon>
                </div>
                <v-timeline density="compact" align="start">
                  <v-timeline-item v-for="(education, index) in store.educations" :key="index" :dot-color="(index + 1) % 2 === 0 ? 'deep-purple-lighten-1' : 'green'" size="x-small">
                    <div class="mb-1">
                      <div class="font-weight-normal">
                        <strong>{{ education.level }}</strong> [{{ education.school }}]
                      </div>
                      <div>{{ education.title }} ({{ education.completion }})</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </div>
            <v-sheet class="pa-1 mt-3 d-flex flex-wrap">
              <div v-for="skill in store.skills" :key="skill.title">
                <v-chip class="ma-1" color="primary" label>
                  <v-icon start :icon="skill.icon"></v-icon>{{ skill.title }}
                </v-chip>
              </div>
            </v-sheet>
          </v-card>
      </v-sheet>
    </div>
</template>

<script setup>

  import { useInformationStore } from '../stores/user'  
  const store = useInformationStore()  

</script>

<style>
  v-sheet {
    width: 100%;
  }
</style>