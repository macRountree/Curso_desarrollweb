
<script setup>
import Recetas from '@/components/Recetas.vue';
import { useBebidasStore } from '@/stores/bebidas.js';

//* OJO No aplicar destructuring
const bebidas = useBebidasStore()
</script>


<template>
    <h1 class="text-6xl font-extrabold">Recetas</h1>
    <p v-if="bebidas.noBebidas" class="text-center my-10 text-2xl text-red-400"> Selecciona Recetas en el Formulario</p>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 mt-10 gap-10">
        <Recetas v-for="receta in bebidas.recetas" :receta="receta" :key="receta.idDrink" />

    </div>
</template>

