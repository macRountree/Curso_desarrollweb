<script setup>
import { computed } from 'vue';

// Definimos el Prop del carrito que vamos a bindear con App.vue
const props = defineProps({
  carrito: {
    type: Array,
    required: true,
  },
  guitarraVai: {
    type: Object,
    required: true,
  },
});

defineEmits(['cantidad-decrementar', 'cantidad-incrementar', 'agregar-carrito', 'eliminar-producto', 'vaciar-carrito'])


//*computed Queremos calcular el total a pagar por todas las guitarras del carrito

const totalPagar = computed(() => {
  //Evaluamos el carrito porque ahi tenemos las cantidades y precios

  // *Reduce toma 2 parametros forzosos y accedemos a cada objeto y el segundo es ele elemento del arreglo y despues asignamos la cantidad default
  return props.carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
})
console.log(totalPagar)


</script>
<template>
  <header class="py-5 header">
    <div class="container-xl">
      <div class="row justify-content-center justify-content-md-between">
        <div class="col-8 col-md-3">
          <a href="index.html">
            <!-- *El logotipo no renderiza porque debemos quitar el public de la ruta -->
            <img class="img-fluid" src="/img/logo.svg" alt="imagen logo" />
          </a>
        </div>
        <nav class="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
          <div class="carrito">
            <img class="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

            <div id="carrito" class="bg-white p-3">
              <!-- * Si el carrito esta vacio -->
              <p v-if="carrito.length === 0" class="text-center m-0">
                El carrito esta vacio
              </p>
              <!-- *REGLA DE V-ELSE.... Es obligatorio que el uso de la directiva v-else debe estar en la siguiente etiqueta con v-if -->
              <div v-else>
                <table class="w-100 table">
                  <thead>
                    <tr>
                      <th>Imagen</th>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>cantidad</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- *El v-for nos permite iterar sobre una coleccion... en este caso un carrito con varias guitarras diferentes -->
                    <!-- * Como estamos usando carrito via defineProps(con carrito required) no ocupamos traernos nada de App.vue -->
                    <tr v-for="producto in carrito">
                      <td>
                        <img class="img-fluid" :src="`/img/${producto.imagen}.jpg`" :alt="`imagen ${producto.nombre}`" />
                      </td>
                      <td>{{ producto.nombre }}</td>
                      <td class="fw-bold">{{ producto.precio }}</td>
                      <td class="flex align-items-start gap-4">
                        <button type="button" class="btn btn-dark"
                          @click="$emit('cantidad-decrementar', producto.id)">-</button>
                        {{ producto.cantidad }}
                        <button type="button" class="btn btn-dark"
                          @click="$emit('cantidad-incrementar', producto.id)">+</button>
                      </td>
                      <td>
                        <!-- *Recordar que producto.id lo creamos en el vfor  de carrito -->
                        <button class="btn btn-danger" type="button"
                          @click="$emit('eliminar-producto', producto.id)">X</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p class="text-end">
                  Total pagar: <span class="fw-bold"> $ {{ totalPagar }}</span>
                </p>
                <button class="btn btn-dark w-100 mt-3 p-2" @click="$emit('vaciar-carrito')">
                  Vaciar Carrito
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <!--.row-->

      <div class="row mt-5">
        <div class="col-md-6 text-center text-md-start pt-5">
          <h1 class="display-2 fw-bold">Modelo {{ guitarraVai.nombre }}</h1>
          <p class="mt-5 fs-5 text-white">
            {{ guitarraVai.descripcion }}
          </p>
          <p class="text-primary fs-1 fw-black">{{ guitarraVai.precio }}</p>
          <button type="button" class="btn fs-4 bg-primary text-white py-2 px-5"
            @click="$emit('agregar-carrito', guitarraVai)">
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>

    <img class="header-guitarra" src="/img/header_guitarra.png" alt="imagen header" />
  </header>
</template>
