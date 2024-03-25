import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppHome from '@/views/Home.vue'
import AppLogin from '@/views/Login.vue'
import AppRegister from '@/views/Register.vue'

const routes: Array<RouteRecordRaw> = [
  {path: '', component: AppHome},
  {path: '/login', component: AppLogin},
  {path: '/register', component: AppRegister}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
