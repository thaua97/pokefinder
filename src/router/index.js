import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Generation from '../views/Generation.vue'
import Pokemon from '../views/Pokemon.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id/generation',
    name: 'Generation',
    component: Generation
  },
  {
    path: '/pokemon/:name',
    name: 'Pokemon',
    component: Pokemon
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
