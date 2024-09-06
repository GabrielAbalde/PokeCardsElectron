<script setup>
    import { useRoute, RouterLink } from 'vue-router';
    import { buscarPokemones } from "../composables/buscarPokemones";
    import { SquareArrowLeft } from "lucide-vue-next"

    const route = useRoute();
    const nombre = route.params.name;

    const { pokemon, loading, error, fetchPokemonDetails } = buscarPokemones();

    fetchPokemonDetails(nombre);
    
</script>


<template>
  <section class="w-full h-[200svh] flex justify-center items-center p-4 md:p-6">
    <div v-if="loading" class="text-center text-2xl">Cargando...</div>
    <div v-else-if="error" class="text-center text-2xl text-red-500">{{ error }}</div>
    <div v-else class="flex flex-col md:flex-row items-center gap-6 w-full max-w-7xl">
      
      <div class="flex-shrink-0 flex flex-col self-start justify-between gap-2 w-full md:w-2/5">
        <RouterLink to="/pokemones">
            <SquareArrowLeft class="text-rojo-nav rounded-lg size-10 md:size-8"/>
        </RouterLink>
        <img :src="pokemon.image" :alt="pokemon.name" class="w-full h-auto md:h-[28rem] object-contain" />
      </div>
      
      <div class="flex-grow flex flex-col gap-4 md:gap-y-3 w-full md:w-3/5 bg-azul-hero/80 text-white p-6 md:px-6 rounded-lg">

        <h1 class="text-3xl md:text-4xl font-bold capitalize">{{ pokemon.name }}</h1>
        
        <div class="flex flex-col md:flex-row justify-between w-full">

            <p class="text-md w-full md:w-3/5">{{ pokemon.description }}</p>
            <div class="flex justify-between md:flex-col sm:flex-row gap-4 w-full md:w-2/5 mt-4 md:mt-0">

                <div class="flex flex-row items-center md:items-center gap-4">
                    <h2 class="text-xl md:text-2xl font-semibold">Tipo:</h2>
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

                <div class="flex flex-col h-full self-center md:self-start md:flex-row items-start md:items-center gap-3 md:gap-4">
                    <p class="font-medium italic">Altura: <span class="font-bold pl-2">{{ pokemon.height / 10 }} m</span></p>
                    <p class="font-medium italic">Peso: <span class="font-bold pl-2">{{ pokemon.weight / 10 }} kg</span></p>
                </div>
            </div>
        </div>
        
        <div class="flex md:flex-row justify-between items-start md:items-center gap-8 mt-4 md:mt-0 md:gap-4">
            <div class="w-2/3 md:w-3/5">
              <h2 class="text-xl md:text-2xl font-semibold">Estadísticas:</h2>
              <div class="grid md:grid-cols-2 gap-x-6 gap-y-4 md:gap-x-16 pt-2">
                <div
                  v-for="stat in pokemon.stats"
                  :key="stat.name"
                  class="flex justify-between items-center"
                >
                  <span class="capitalize">{{ stat.name }}:</span>
                  <span class="font-bold">{{ stat.base }}</span>
                </div>
              </div>
            </div>

            
            <div class=" w-2/3 md:w-2/6 self-start">
                <h2 class="text-2xl font-semibold">Habilidades:</h2>
                <ul class="list-disc list-inside pt-2">
                    <li v-for="ability in pokemon.abilities" :key="ability" class="capitalize">
                    {{ ability }}
                    </li>
                </ul>
            </div>
        </div>

        <div class="mt-4 md:mt-0">
            <h2 class="text-xl md:text-2xl font-semibold">Movimientos:</h2>
            <ul class="list-disc list-inside grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 pt-2">
                <li v-for="move in pokemon.moves" :key="move" class="capitalize">
                {{ move }}
                </li>
            </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- <style scoped>

  .alturaCel{
    height: 230svh !important;
  }
</style> -->