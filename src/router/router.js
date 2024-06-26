import { createRouter,createWebHistory } from 'vue-router'

import HomeView from '../Pages/Home.vue'
import Profile from '../Pages/Profile/Profile.vue'
//  Auth
import Login from '../Pages/Auth/Login.vue'
import Register from '../Pages/Auth/Register.vue'

const routes = [
  { path: '/Home', component: HomeView },
  { path: '/Login', component: Login },
  { path: '/Register', component: Register },
  { path: '/Alumnos', component: Profile },
  { path: '/Materias', component: Profile },
  { path: '/Profile', component: Profile },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'text-blue-500',
  linkExactActiveClass: 'text-black',
})


export default router