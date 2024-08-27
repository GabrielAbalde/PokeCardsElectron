<script setup>
    import pokeBola from "../assets/img/file.png";
    import {RouterLink, useRoute} from "vue-router";


    const isActiveLink = (routePath) => {
      const route = useRoute();
      
      return route.path === routePath;
    }
    
</script>

<template>
    <nav class=" bg-rojo-nav text-white">
      <div class="max-w-full px-2 sm:px-6 lg:px-6 border-b-2/30 ">
        <div class="flex h-16 items-center justify-between">
          <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start text-lg">
            <!-- Logo -->
            <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
              <img class="h-12 w-auto" :src="pokeBola" alt="Pokebola" />
            </RouterLink>
            <div class="md:ml-auto">
              <div class="flex space-x-2">
                <RouterLink
                  to="/"
                  :class="[
                    isActiveLink('/')
                      ? 'bg-rojo-active/60'
                      : 'hover:bg-rojo-active/30 hover:text-white',
                    'text-white',
                    'px-3',
                    'py-2',
                    'rounded-md',
                  ]">
                  Home
                </RouterLink>
                <RouterLink
                  to="/pokemones"
                  :class="[
                    isActiveLink('/pokemones')
                      ? 'bg-rojo-active/60'
                      : 'hover:bg-rojo-active/30 hover:text-white',
                    'text-white',
                    'px-3',
                    'py-2',
                    'rounded-md',
                  ]">
                  Pokemones
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
</template>