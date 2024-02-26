<script setup>
import {ref} from 'vue';

// *DefineProps no necesita importarse
//*Como el vbind de App.vue se llama guitarra.... el objeto del propd tambien debe llamarse igual
const props = defineProps({guitarra: {type: Object, required: true}});

// *Creamos un state y lo iniciamos en 0 OJO: es un componente nativo .. es decir No es global es exclusivo de este Componente Guitars

//*Ejempo de una funcion de method handler
// const incrementar = () => {
//   num.value++;
// };
// **Nos traemos el emit  que declaramos en la App.vue con el mismo nombre
defineEmits(['agregar-carrito']);
</script>

<template>
  <div class="col-md-6 col-lg-4 my-4 row align-items-center">
    <div class="col-4">
      <!-- *Podemos agregarle un vbind al src , alt o a una clase -->
      <img
        class="img-fluid"
        :src="`/img/${guitarra.imagen}.jpg`"
        :alt="`imagen guitarra ${guitarra.nombre}`"
      />
    </div>
    <div class="col-8">
      <h3 class="text-black fs-4 fw-bold text-uppercase">
        {{ guitarra.nombre }}
      </h3>
      <!-- *No ocupamos el .value ... ya que este ref esnativo de este componente  -->
      <p>
        {{ guitarra.descripcion }}
      </p>
      <p class="fw-black text-primary fs-3"></p>
      <!-- * el @click === a v-on:click y no es necesario traernos toda la funcion incrementar -->
      <!-- * si queremos ejecutar el emit de agregar carrito agregamos $emit-->
      <!-- *Podemos agregar informaciona al emit en .. puede ser id puede ser numero puede ser el objeto guitarra -->
      <button
        type="button"
        class="btn btn-dark w-100"
        @click="$emit('agregar-carrito', guitarra)"
      >
        Agregar al Carrito
      </button>
    </div>
  </div>
</template>
