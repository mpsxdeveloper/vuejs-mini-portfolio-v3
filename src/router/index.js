import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Experiences from '../views/Experiences.vue'
import Personal from '../views/Personal.vue'
import Skills from '../views/Skills.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/courses',
      name: 'Courses',
      component: Courses,
      meta: {
        title: 'Cursos'
      }
    },
    {
      path: '/experiences',
      name: 'Experiences',
      component: Experiences,
      meta: {
        title: 'Experiência Profissional'
      }
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal,
      meta: {
        title: 'Dados Pessoais'
      }
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills,
      meta: {
        title: 'Habilidades'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if(title) {
      document.title = title
  }
  next()
})

export default router
