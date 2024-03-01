<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

import { useBebidasStore } from '../stores/bebidas';
import { useNotificacionStore } from '@/stores/notificaciones';

// /*
//   Si queremos que se muestre el formulario solo en el Inicio y no en la pag Favorito debemos usar el useRoute
//   UseRoute es un hook que nos permite acceder al objeto y a laspropiedades de una ruta
// */
const route = useRoute();
//* No es recomendable utilizar destructuring {categorias} cuando utilizamos el store en un componente
//* Ya que se puede perder la reactividad de ¨Pinia
const storeBebidas = useBebidasStore();
const storeNotificaciones = useNotificacionStore();
// console.log(storeBebidas.categorias)
//* creamos una variable computada y le decimos que muestre el inicio
const paginaInicio = computed(() => route.name === 'inicio'); //* Mandamos  la variabla al formulario ... para condicionar si PaginaInicio se muestre solo en la pagina inicio
// console.log(paginaInicio)

const handleSubmit = () => {
    // TODO: validar
    if (Object.values(storeBebidas.busqueda).includes('')) {
        storeNotificaciones.texto = 'Todos los campos son obligatorios';
        storeNotificaciones.show = true;
        storeNotificaciones.error = true;
        storeNotificaciones.$patch({
            texto: 'Todos los Campos son Obligatorios',
            show: true,
            error: true,
        });
        return;
    }
    //* Aqui llamamos la funcion
    storeBebidas.obtenerBebidas();
};
</script>
<template>
    <!-- *Podemos reutilizar el hook de useRoute para que solo en el header se muestre el fondo en Inicio y no en Fav  -->
    <header class="bg-slate-800" :class="{ header: paginaInicio }">
        <div class="mx-auto container px-5 py-16">
            <div class="mx-auto container px-5 py-16">
                <div class="flex justify-between items-center">
                    <RouterLink :to="{ name: 'inicio' }">
                        <img alt="Logotipo" src="/img/logo.svg" class="w-32" />
                    </RouterLink>
                    <nav class="flex gap-4 text-white">
                        <RouterLink :to="{ name: 'inicio' }" class="uppercase font-bold" active-class="text-orange-500">
                            Inicio
                        </RouterLink>
                        <RouterLink :to="{ name: 'favoritos' }" class="uppercase font-bold" active-class="text-orange-500">
                            Favoritos
                        </RouterLink>
                    </nav>
                </div>
            </div>

            <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6" v-if="paginaInicio"
                @submit.prevent="handleSubmit">
                <div class="space-y-4">
                    <label for="" class="text-white uppercase font-extrabold text-lg">
                        Nombre o Ingredientes
                    </label>
                    <input type="text" name="" id="ingrediente" class="p-3 w-full rounded focus:outline-none"
                        placeholder="Nombre o ingrediente: Vodka,Tequila, etc" v-model="storeBebidas.busqueda.nombre" />
                </div>
                <div class="space-y-4">
                    <label for="" class="text-white uppercase font-extrabold text-lg">
                        Categoria
                    </label>
                    <select type="text" name="" id="categoria" class="p-3 w-full rounded focus:outline-none"
                        v-model="storeBebidas.busqueda.categoria">
                        <option value="">--Selección--</option>
                        <!-- *en el :key colocamos el identificador unico de cada categoria {puede ser id } pero en este caso el diferenciador es strCategory segun la API -->
                        <option v-for="categoria in storeBebidas.categorias" :key="categoria.strCategory"
                            :value="categoria.strCategory">
                            {{ categoria.strCategory }}
                        </option>
                    </select>
                </div>
                <input type="submit"
                    class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold rounded-lg w-full p-2 uppercase" />
            </form>
        </div>
    </header>
</template>

<style>
.header {
    background-image: url('/img/bg.jpg');
    background-size: cover;
    background-position: center;
}
</style>
