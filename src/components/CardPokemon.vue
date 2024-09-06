<script setup>
    import { Trash } from "lucide-vue-next"
    import { useRoute } from "vue-router"
    import { ref } from "vue"

    const props = defineProps({
        name: String,
        image: String,
        type: String
    })

    const route = useRoute();
    
    const modal = ref(false)
    
    const mostrarIconoBorrado = route.path === "/pokemones";
    
    const emit = defineEmits(["borrarPokemon"]);

    const removerPokemon  = (estado) => {
        modal = !estado;
    }

</script>

<template>
    <div class="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-300 relative">
        <img :src="image" alt="Imagen de {{ name }}" class="w-full object-cover px-2"/>
        <div class="px-4 pb-2">
            <h2 class="text-xl font-semibold pb-1 text-red-500 capitalize">{{ name }}</h2>
            <p class="text-sm text-gray-950 pb-3 capitalize">Tipo: {{ type }}</p>
            <router-link :to="`/pokemon/${name}`">
                <button class="w-full bg-black/90 text-white py-2 rounded hover:bg-black/95 transition-colors duration-300">
                Ver Detalles
                </button>
            </router-link>
        </div>
        <span v-if="mostrarIconoBorrado" @click="removerPokemon(modal)" class="absolute top-2 right-2 h-auto w-auto bg-rojo-nav/60 rounded-full cursor-pointer">
            <Trash class="size-8 text-white p-2"/>
        </span>
    </div>
</template>
  
