<script setup>
import { onMounted, reactive, ref } from 'vue';
import { db } from './data/guitarras.js';
import Guitars from './components/Guitars.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
// *Si queremos que las guitarras se agreguen dinamicamente utilizamos la ´lógica de JS y ref y reactive

//*Reactive siempre es un objeto...entonces nuestras guitarras seran un objeto de arreglos
// const state = reactive({
//   guitarras: [],
// });
// console.log(state.guitarras);

//*Podemos utilizar ref para una sintaxis sencilla

const guitarras = ref([]); //*si es un arreglo vacio le asignamos [] dentro del ref
const carrito = ref([]);

//*Si son datos Agrupados (objetos) utilizamos Reactive si son datos bool, arrays,string  */
console.log(guitarras.value);

// const state = reactive({guitarras: []});

//  una vez que el qcomponente esté listo .. ejecuta las guitarras
onMounted(() => {
  guitarras.value = db;
  // state.guitarras = db;
});

const agregarCarrito = guitarra => {
  const existeCarrito = carrito.value.findIndex(
    producto => producto.id === guitarra.id
  );
  if (existeCarrito >= 0) {
    console.log(existeCarrito);
    // *Como find index nos retorna el indice de carrito podemos acceder a el
    carrito.value[existeCarrito].cantidad++;
  } else {
    guitarra.cantidad = 1;
    carrito.value.push(guitarra);
  }
  console.log(existeCarrito);
};

const cantidadDecrementar = () => {
  console.log('Menos...');
};
const cantidadIncrementar = () => {
  console.log('Mas...');
};
</script>
<template>
  <!-- *Le pasamos el carrito para poder manejarlo -->
  <!-- * Si es un prop seagrega ":carrito" y  lo definimos en el componente con defineProps() si es un evento se agrega @incrementar" -->
  <Header :carrito="carrito" @cantidad-incrementar="cantidadIncrementar" @cantidad-decrementar="cantidadDecrementar" />
  <main class="container-xl mt-5">
    <h2 class="text-center">Nuestra Colección</h2>

    <div class="row mt-5">
      <!-- ! Aqui  Pegamos el componente de guitarras creado -->
      <!-- *la sintaxis para nombrar nuestras funciones es agregar-carrito -->

      <Guitars v-for="guitarra in guitarras" :guitarra="guitarra" @agregar-carrito="agregarCarrito" />
      <!--* Quitamos el HTML de todas las guitarras y lo insetamos todo en JS -->
    </div>
  </main>
  <Footer />
</template>
