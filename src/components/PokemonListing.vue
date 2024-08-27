<script setup>
    import CardPokemon from './CardPokemon.vue';
    import {RouterLink} from "vue-router";

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

</script>

<template>
    <section :class="`flex min-h-full flex-col ${showButton ? 'justify-around' : 'justify-start'}`">
        <div class="grid grid-cols-6 auto-cols-[12rem] gap-5">
            <CardPokemon 
                v-for="pokemon in pokemones.slice(0, limit || pokemones.length)"
                :key="pokemon.name"
                :name="pokemon.name"
                :image="pokemon.image"
                :type="pokemon.type"
            />
        </div>
        <RouterLink v-if="showButton" class="self-center" to="/pokemones">
            <button class="w-96 bg-rojo-nav text-white py-3 rounded text-semibold text-xl hover:bg-rojo-hover/80 transition-colors duration-300">
                Ver más Pokemones
            </button>
        </RouterLink>
    </section>
</template>