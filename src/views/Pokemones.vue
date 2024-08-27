<script setup>
    import PokemonListing from '../components/PokemonListing.vue';
    import { buscarPokemones } from '../composables/buscarPokemones';
    import { ref, computed } from 'vue';

    const buscarItem = ref("");
    const tiposSeleccionados = ref([]);

    const tipos = [
        { name: "normal" },
        { name: "fighting" },
        { name: "flying" },
        { name: "poison" },
        { name: "ground" },
        { name: "rock" },
        { name: "bug" },
        { name: "ghost" },
        { name: "steel" },
        { name: "fire" },
        { name: "water" },
        { name: "grass" },
        { name: "electric" },
        { name: "psychic" },
        { name: "ice" },
        { name: "dragon" },
        { name: "dark" },
        { name: "fairy" },
        { name: "stellar" }
    ];


    const { pokemones, loading, error } = buscarPokemones();

    console.log(pokemones);

    const toggleTipo = (tipo) => {
        if (tiposSeleccionados.value.includes(tipo)) {
            tiposSeleccionados.value = tiposSeleccionados.value.filter(t => t !== tipo);
        } else {
            tiposSeleccionados.value.push(tipo);
        }
    };

    const pokeFiltrados = computed(() => {
        return pokemones.value.filter(pokemon => {
            const nombreCoincide = pokemon.name.toLowerCase().includes(buscarItem.value.toLowerCase());
            const tipoCoincide = tiposSeleccionados.value.length === 0 || tiposSeleccionados.value.includes(pokemon.type);
            return nombreCoincide && tipoCoincide;
        });
    });
</script>

<template>
    <section class="py-5 px-10 flex flex-col justify-start">
        <div class="flex w-full justify-between items-center pb-4">
            <input 
                v-model="buscarItem" 
                type="text" 
                placeholder="Buscar Pokémon" 
                class="p-2 w-36 border rounded outline-gray-300"
            />
            <div class="flex justify-evenly gap-[0.450rem]">
                <button 
                    v-for="tipo in tipos" 
                    :key="tipo.name" 
                    @click="toggleTipo(tipo.name)" 
                    :class="{'bg-rojo-nav/70': tiposSeleccionados.includes(tipo.name), 'bg-gray-200': !tiposSeleccionados.includes(tipo.name)}"
                    class="p-1.5 rounded"
                >
                    {{ tipo.name }}
                </button>
            </div>
        </div>
        <div v-if="loading" class="text-2xl pl-2">Cargando...</div>
        <div v-else-if="error" class="text-2xl pl-2">{{ error }}</div>
        <PokemonListing v-else :pokemones="pokeFiltrados" :showButton="false" />
    </section>
</template>
