<script setup>
//* En ese componente mostraremos las propiedades creadas y nos traemos la data de firebase
import usePropiedades from '@/composables/usePropiedades'; //*nostraemos el composable

const {propiedadesCollection, priceProperty} = usePropiedades();

console.log(propiedadesCollection);
</script>
<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Admin Panel</h2>

  <v-btn color="blue" variant="flat" :to="{name: 'nueva-propiedad'}"
    >Nueva Propiedaddd</v-btn
  >

  <v-card class="mx-auto mt-10" flat>
    <v-list>
      <v-list-item
        v-for="propiedad in propiedadesCollection"
        :key="propiedad.id"
      >
        <template v-slot:prepend>
          <v-list-item-media :start="true">
            <img :src="propiedad.imagen" alt="hola" width="180" />
          </v-list-item-media>
        </template>
        <v-list-item-title>{{ propiedad.propiedad.titulo }}</v-list-item-title>
        <v-list-item-subtitle>{{
          priceProperty(propiedad.propiedad.precio)
        }}</v-list-item-subtitle>
        <template v-slot:append>
          <!-- *En nuestro Router en la parte de editar tenemos /editar/:id por lo que tenemos que agregarlo a este btn -->
          <!-- *Editar manda a la pagina editar-propiedad y en la url se inyectara el uid -->
          <v-btn
            variant="flat"
            color="info"
            class="mr-2"
            :to="{name: 'editar-propiedad', params: {id: propiedad.id}}"
          >
            Editar
          </v-btn>
          <v-btn variant="flat" color="red-darken-3"> Eliminar </v-btn>
        </template>
      </v-list-item>
    </v-list>
  </v-card>
</template>
-
