<script setup>
    const props = defineProps({
        isOpen: {
            type: Boolean,
            default: false
        }
    })

    const emit = defineEmits("[close]");

</script>

<template>
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white flex flex-col gap-8 rounded-lg shadow-lg md:w:1/2 p-4">
            <slot name="body"></slot>
            <slot name="footer"></slot>
        </div>
    </div>
</template>