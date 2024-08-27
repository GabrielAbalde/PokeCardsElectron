<script setup>
  import NavBar from "./components/NavBar.vue";
  import {RouterView} from "vue-router";
</script>

<template>
  <NavBar/>
  <RouterView class="h-full"/>
</template>
