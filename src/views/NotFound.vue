<script setup>
    import { RouterLink } from 'vue-router';
    import { TriangleAlert } from 'lucide-vue-next';

</script>

<template>
    <section class="text-center flex flex-col justify-center items-center h-[32rem] gap-8">
        <div class="flex flex-col justify-center gap-5">
            <TriangleAlert :size="48" :stroke-width="1.25" absoluteStrokeWidth class="size-20 self-center"/>
            <h1 class="text-5xl font-bold">404 Not Found</h1>
       </div>
       <div class="flex flex-col justify-center gap-5">
        <p class="text-xl">Esta página no existe</p>
        <RouterLink to="/" class="text-white bg-rojo-nav hover:bg-rojo-hover rounded-md py-3">Volver Atrás</RouterLink>
       </div>
    </section>
</template>