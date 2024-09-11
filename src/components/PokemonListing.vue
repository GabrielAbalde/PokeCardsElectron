<script setup>
    import CardPokemon from './CardPokemon.vue';
    import { RouterLink } from "vue-router";

    const props = defineProps({
        pokemones: {
            type: Array,
            default: () => []
        },
        limit: Number,
        showButton: {
            type: Boolean,
            default: false
        },
    })

    const emit = defineEmits(["borrarPokemon", "abrirModal"]);

    const quitarPokemon = (name) => {
        emit("abrirModal", name);
    }
    
</script>

<template>
    <section :class="`flex flex-col ${showButton ? 'justify-around mb-5' : 'justify-start'} gap-8 flex-1`">
        <div v-if="pokemones.length > 0" 
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 auto-cols-[12rem]">
            <CardPokemon
                v-for="pokemon in pokemones.slice(0, limit || pokemones.length)"
                :key="pokemon.name"
                :name="pokemon.name"
                :image="pokemon.image"
                :type="pokemon.type"
                @borrarPokemon="quitarPokemon"
                @abrirModal="emit('abrirModal', pokemon)"
            />
        </div>
        <p v-else class="w-full self-center">No hay pokemones disponibles xddd</p>
        <RouterLink v-if="showButton" class="self-center" to="/pokemones">
            <button class="w-full md:w-96 bg-rojo-nav  md:mb-0 text-white px-4 py-3 rounded text-semibold text-xl hover:bg-rojo-hover/80 transition-colors duration-300">
                Ver más Pokemones
            </button>
        </RouterLink>
    </section>
</template>
