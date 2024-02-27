        
<script setup>
import { RouterLink } from 'vue-router';

/* 
 *=== === === Podemos hacer un molde para los botones con SLOT y crear un Prop para reutilizar las mismas clases
 */
defineProps({
    to: { type: String }
})

</script>
<template>
    <RouterLink :to="{ name: to }" class=" block md:inline-block rounded bg-blue-600 py-2 px-3
         text-white uppercase font-bold text-sm shadow hover:bg-blue-500">
        <!-- * Es un placeholder que podemos llenar un componente  con nuestras propias etiquetas,
        *El cual deja crear arboles del dOM separados y presentarlos juntos
        -->
        <slot></slot>
    </RouterLink>
</template>

