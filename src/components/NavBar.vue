<script setup>
import pokeBola from "../assets/img/file.png";
import { RouterLink, useRoute } from "vue-router";

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-rojo-nav text-white">
    <div class="max-w-full px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo -->
        <RouterLink class="flex items-center" to="/">
          <img class="h-10 w-auto sm:h-12" :src="pokeBola" alt="Pokebola" />
        </RouterLink>
        <!-- Links -->
        <div class="flex space-x-4">
          <RouterLink
            to="/"
            :class="[
              isActiveLink('/')
                ? 'bg-rojo-active/60'
                : 'hover:bg-rojo-active/30 hover:text-white',
              'text-white px-3 py-2 rounded-md  font-medium'
            ]"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/pokemones"
            :class="[
              isActiveLink('/pokemones')
                ? 'bg-rojo-active/60'
                : 'hover:bg-rojo-active/30 hover:text-white',
              'text-white px-3 py-2 rounded-md font-medium'
            ]"
          >
            Pokemones
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

