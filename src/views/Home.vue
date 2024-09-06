<script setup>
    import { onMounted } from "vue"
    import Hero from '../components/Hero.vue';
    import PokemonListing from '../components/PokemonListing.vue';
    import { buscarPokemones } from '../composables/buscarPokemones';

    const { pokemones, loading, error, traerDatos } = buscarPokemones(6);

    onMounted(() => {
        traerDatos()
    })
</script>

<template>
    <section class="w-full h-full flex flex-col justify-between gap-6">
        <Hero />
        <div class="px-10">
            <div v-if="loading" class="text-2xl pl-2">Cargando...</div>
            <div v-else-if="error" class="text-2xl pl-2">{{ error }}</div>
            <div v-else>
                <PokemonListing :pokemones="pokemones" :limit="6" :showButton="true"/>
            </div>
        </div>
    </section>
</template>