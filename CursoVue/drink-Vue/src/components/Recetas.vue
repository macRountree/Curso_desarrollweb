<script setup>
import { useBebidasStore } from '@/stores/bebidas';
const bebidasStore = useBebidasStore()
defineProps({ receta: { type: Object } })
</script>
<template>
    <div class="border shadow-lg">
        <div class="overflow-hidden">
            <img class="hover:scale-125 transition-transform hover:rotate-2" :src="receta.strDrinkThumb"
                :alt="`Imagen de ${receta.strDrink}`">
        </div>


        <div class="p-5">
            <!-- *strDrink esta definido en la data de la API -->
            <!-- *Truncate evita el salto de linea en este caso si el titulo de la bebida es muy largo añade ... al card -->
            <h2 class="text-2xl truncate font-extrabold">{{ receta.strDrink }}</h2>
            <button type="button" class="bg-orange-400 mt-5 p-3 font-bold text-white text-lg hover:bg-orange-500 w-full "
                @click="bebidasStore.seleccionaBebida(receta.idDrink)">
                Ver Receta
            </button>
        </div>
    </div>
</template>

