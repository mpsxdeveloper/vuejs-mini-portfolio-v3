import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useInformationStore = defineStore('user', () => {
  
  const user = ref({ name: 'nome', phone: 'telefone', email: 'email', github: 'github', website: 'website' })
  const experiences = ref([])
  const educations = ref([])
  const skills = ref([])

  const updateInformation = (information) => {
    user.value = information
  }

  const addExperiences = (experience) => {
    experiences.value.push(experience)
    experiences.value = experiences.value.sort(function(a, b) { return b.to - a.to })       
  }

  const addEducations = (education) => {
    educations.value.push(education)
    educations.value = educations.value.sort(function(a, b) { return b.completion - a.completion })    
  }

  const addSkills = (newSkill) => {
    let exists = false
    skills.value.forEach(skill => {
        if(skill.title == newSkill.title) {
          exists = true
        }
    })
    if(!exists) {
      skills.value.push({ title: newSkill.title, icon: newSkill.icon })
      return true            
    }
    else {
      return false
    }
    
  }

  return {
    user, updateInformation, experiences, addExperiences, educations, addEducations, skills, addSkills
  }

})
