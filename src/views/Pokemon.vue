<script setup>
    import { useRoute, RouterLink } from 'vue-router';
    import { buscarPokemones } from "../composables/buscarPokemones";
    import { SquareArrowLeft } from "lucide-vue-next"

    const route = useRoute();
    const nombre = route.params.name;

    console.log(nombre)

    const { pokemon, loading, error, fetchPokemonDetails } = buscarPokemones();

    fetchPokemonDetails(route.params.name);
    
</script>

<template>
  <section class="w-full h-full flex justify-center items-center p-6">
    <div v-if="loading" class="text-center text-2xl">Cargando...</div>
    <div v-else-if="error" class="text-center text-2xl text-red-500">{{ error }}</div>
    <div v-else class="flex flex-col md:flex-row items-center gap-8 w-full">
      
      <!-- Imagen del Pokémon -->
      <div class="flex-shrink-0 flex flex-col justify-between gap-10 w-2/5 max-h-full">
        <RouterLink to="/pokemones">
            <SquareArrowLeft :size="36" class="text-rojo-nav rounded-lg"/>
        </RouterLink>
        <img :src="pokemon.image" :alt="pokemon.name" class="w-auto h-[28rem] object-contain" />
      </div>
      
      <!-- Información del Pokémon -->
      <div class="flex-grow flex flex-col gap-6 h-full w-1/3 bg-azul-hero/80 text-white py-6 px-6 rounded">

        <h1 class="text-4xl font-bold capitalize">{{ pokemon.name }}</h1>
        
        <div class="flex justify-between w-full">
            <p class="text-md text-wrap w-3/5 self-end">{{ pokemon.description }}</p>
            <div class="flex flex-col h-full justify-between items-start gap-4 w-2/6">
                <!-- Tipos -->
                <div class="flex items-center gap-4 ">
                    <h2 class="text-2xl font-semibold">Tipo:</h2>
                    <div class="flex gap-4">
                        <p
                            v-for="type in pokemon.types"
                            :key="type"
                            class="py-1 px-2 bg-gray-200 text-black rounded capitalize"
                            >
                            {{ type }}
                        </p>
                    </div>
                </div>
                <!-- Altura y Peso -->
                <div class="flex items-center gap-4">
                    <p class="font-medium italic">Altura: <span class="font-bold pl-2">{{ pokemon.height / 10 }} m</span></p>
                    <p class="font-medium italic">Peso: <span class="font-bold pl-2">{{ pokemon.weight / 10 }} kg</span></p>
                </div>
            </div>
            
        </div>
        
        
        <div class="flex justify-between items-center">
            <!-- Estadísticas -->
            <div class="w-3/5">
              <h2 class="text-2xl font-semibold">Estadísticas:</h2>
              <div class="grid grid-cols-2 auto-cols-min gap-4 pt-2">
                <div
                  v-for="stat in pokemon.stats"
                  :key="stat.name"
                  class="flex justify-between items-center w-40"
                >
                  <span class="capitalize">{{ stat.name }}:</span>
                  <span class="font-bold">{{ stat.base }}</span>
                </div>
              </div>
            </div>

            <!-- Habilidades -->
            <div class="w-2/6 self-start">
                <h2 class="text-2xl font-semibold">Habilidades:</h2>
                <ul class="list-disc list-inside pt-2">
                    <li v-for="ability in pokemon.abilities" :key="ability" class="capitalize">
                    {{ ability }}
                    </li>
                </ul>
            </div>
        </div>

        <!-- Movimientos -->
        <div class="">
                <h2 class="text-2xl font-semibold">Movimientos:</h2>
                <ul class="list-disc list-inside grid grid-cols-4 pt-2">
                    <li v-for="move in pokemon.moves" :key="move" class="capitalize">
                    {{ move }}
                    </li>
                </ul>
            </div>
      </div>
    </div>
  </section>
</template>
