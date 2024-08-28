<script setup>
import { defineProps } from "vue";

defineProps({
    title: {
        type: String,
        default: "Poke Visor"
    },
    subtitle: {
        type: String,
        default: "¡Encuentra todos los pokemones de tu gusto con todas sus estadísticas!"
    }
});
</script>

<template>
    <section class="bg-azul-hero py-4">
        <div class="w-full px-4 flex flex-col justify-center items-center">
            <div class="text-center flex flex-col gap-4 text-wrap max-w-[90%] sm:max-w-[40rem]">
                <h1 class="text-3xl font-bold text-white sm:text-4xl md:text-[2.8rem]"> {{ title }} </h1>
                <p class="text-xl text-white sm:text-2xl"> {{ subtitle }} </p>
            </div>
        </div>
    </section>
</template>