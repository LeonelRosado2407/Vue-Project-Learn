<script setup>
import NavbarComponent from './components//NavbarComponents/NavbarComponent.vue'
</script>

<template>
  <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
    <div class="-m-6 min-h-screen w-[calc(100%+48px)] ">
      
      <NavbarComponent />

      <div class="w-full p-10 mx-auto min-h-screen bg-green-100">

        <main>
          <RouterView />
        </main>
        
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
