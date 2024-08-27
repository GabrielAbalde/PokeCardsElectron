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
      <div class="w-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center">
        <div class="text-center flex flex-col gap-4 text-wrap w-[30rem]">
          <h1 class="text-3xl font-extrabold text-white sm:text-5xl md:text-5xl"> {{ title }} </h1>
          <p class="text-xl text-white"> {{ subtitle }} </p>
        </div>
      </div>
    </section>
</template>

<styles>


</styles>