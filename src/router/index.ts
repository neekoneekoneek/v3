import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/about.vue'

const routes = [
  {
    name: 'about',
    path: '/about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
