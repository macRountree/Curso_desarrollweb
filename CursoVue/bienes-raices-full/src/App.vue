<script setup>
import {RouterLink, RouterView} from 'vue-router';
//
</script>

<template>
  <!-- *Si buscamos ladocumentación del v-card en vuetify nos mostrara el prop (elevation'sombreado') y como se renderizara -->
  <v-card elevation="3" variant max-width="980" class="mx-auto">
    <v-layout>
      <v-app-bar color="blue-darken-1">
        <!-- * Append coloca el contenido a la derecha y prepend a la izq -->
        <template v-slot:prepend>
          <!-- *v-btn puede usarse como router si le asignamos el :to -->
          <v-btn :to="{name: 'home'}"> Real State - VueFire </v-btn>
        </template>
        <template v-slot:append>
          <v-btn :to="{name: 'login'}"> Log in </v-btn>
        </template>
      </v-app-bar>

      <v-main>
        <v-container>
          <RouterView />
        </v-container>
      </v-main>
    </v-layout>
  </v-card>
</template>
