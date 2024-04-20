import { createRouter,createWebHistory } from 'vue-router'

import HomeView from '../Pages/Home.vue'
import Profile from '../Pages/Profile/Profile.vue'

const routes = [
  { path: '/Home', component: HomeView },
  { path: '/Login', component: Profile },
  { path: '/Register', component: Profile },
  { path: '/Alumnos', component: Profile },
  { path: '/Materias', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'text-blue-500',
  linkExactActiveClass: 'text-black',
})


export default router