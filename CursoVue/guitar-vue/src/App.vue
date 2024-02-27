<script setup>
import { onMounted, reactive, ref, watch } from 'vue';
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

const guitarraVAI = ref({})


//*En lugar de llamar la funcion en todos los lugares donde cambia el state... utilizamos el watch con la propi
watch(carrito, () => { saveLocalStorage() }, { deep: true })

//*Si son datos Agrupados (objetos) utilizamos Reactive si son datos bool, arrays,string  */
console.log(guitarras.value);

// const state = reactive({guitarras: []});

//  una vez que el qcomponente esté listo .. ejecuta las guitarras
onMounted(() => {
  guitarras.value = db;
  guitarraVAI.value = db[3]
  // state.guitarras = db;
  //*esta en localStorage pero podemos agregarlo en OnMoujnted
  const carritoStorage = localStorage.getItem('carrito')

  //Validamos si es que existe ya algo en el lS

  if (carritoStorage) {

    carrito.value = JSON.parse(carritoStorage)
  }
});

const agregarCarrito = guitarra => {
  const existeCarrito = carrito.value.findIndex(
    producto => producto.id === guitarra.id
  );
  // * cuando presionamos agregar carrito.. la posicion en el arreglo es -1
  if (existeCarrito >= 0) {
    console.log(existeCarrito);
    // *Como find index nos retorna el indice de carrito podemos acceder a el
    carrito.value[existeCarrito].cantidad++;
  } else {
    guitarra.cantidad = 1;
    carrito.value.push(guitarra);
  }
  // console.log(existeCarrito);

  saveLocalStorage()
};

const cantidadDecrementar = (id) => {
  const indexId = carrito.value.findIndex(producto => producto.id === id)


  if (carrito.value[indexId].cantidad <= 1) return

  carrito.value[indexId].cantidad--
};
const cantidadIncrementar = (id) => {
  const indexId = carrito.value.findIndex(producto => producto.id === id)
  if (carrito.value[indexId].cantidad >= 5) return
  carrito.value[indexId].cantidad++


};

const eliminarId = (id) => {
  //* podemos utilizar el filter que permite traernos todos los registros que sean iguales o diferentes a una condicion

  /* 
  * Aqui la lógica de la iteración es que queremos traernos todos aquellos id diferentes al proudcto id.... porque si ya eliminamos el producto de un carrito solo me
   interesan los id de los productos restantes o que si queremos que esten en el carrito
  */
  carrito.value = carrito.value.filter(producto => producto.id != id)


}
const vaciarCarrito = () => {


  carrito.value = []


}

const saveLocalStorage = () => {

  //* Carrito es array ... como no podemos almacenar arreglos en LStorage...
  //* Debemos convertirlos a string 
  localStorage.setItem('carrito', JSON.stringify(carrito.value))


}
</script>
<template>
  <!-- *Le pasamos el carrito para poder manejarlo -->
  <!-- * Si es un prop seagrega ":carrito" y  lo definimos en el componente con defineProps() si es un evento se agrega @incrementar" -->
  <Header :guitarraVai="guitarraVAI" :carrito="carrito" @cantidad-incrementar="cantidadIncrementar"
    @cantidad-decrementar="cantidadDecrementar" @agregar-carrito="agregarCarrito" @eliminar-producto="eliminarId"
    @vaciar-carrito="vaciarCarrito" />
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
