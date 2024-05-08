<script>
import { RouterLink, RouterView } from 'vue-router'
import NavItemComponent from './NavItemComponent.vue'

export default {
  components: {
    RouterLink,
    RouterView,
    NavItemComponent
  },
  data() {
    return {
      isDropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen
    },
    getUriCurrent() {
      return this.$route.path
    }
  }
}
</script>

<template>
  <nav v-if="getUriCurrent() !== '/Login' && getUriCurrent() !== '/Register'"
    class="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
    <div class="flex items-center justify-between text-blue-gray-900">
      <div
        class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
        Panel de Control
      </div>
      <div class="flex items-center gap-4">
        <div class="hidden mr-4 lg:block">
          <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <NavItemComponent to="/Home">
              Home
            </NavItemComponent>

            <NavItemComponent to="/Login">
              Login
            </NavItemComponent>

            <NavItemComponent to="/Register">
              Registro
            </NavItemComponent>

            <NavItemComponent to="/Alumnos">
              Alumno
            </NavItemComponent>

            <NavItemComponent to="/Materias">
              Materias
            </NavItemComponent>

          </ul>
        </div>
        <button
          class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button" @click="toggleDropdown">
          <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </div>
    <div class="w-72">
      <ul v-show="isDropdownOpen"
        class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <NavItemComponent to="/Home" @click="toggleDropdown">
          Home
        </NavItemComponent>

        <NavItemComponent to="/Login" @click="toggleDropdown">
          Login
        </NavItemComponent>

        <NavItemComponent to="/Register" @click="toggleDropdown">
          Registro
        </NavItemComponent>

        <NavItemComponent to="/Alumnos" @click="toggleDropdown">
          Alumno
        </NavItemComponent>

        <NavItemComponent to="/Materias" @click="toggleDropdown">
          Materias
        </NavItemComponent>
      </ul>
    </div>
  </nav>
</template>
