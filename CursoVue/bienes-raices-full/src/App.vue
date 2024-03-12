<script setup>
import {RouterLink, RouterView} from 'vue-router';
import {useAuthStore} from './stores/authStore';
import {storeToRefs} from 'pinia';
//

const authStore = useAuthStore();
//*storeToRefs nos permite desestructurar  una store(convierte todo lo reactivo a refs)
const {isAuth} = storeToRefs(authStore);

// const {login} = authStore;
</script>

<template>
  <!-- *Si buscamos ladocumentación del v-card en vuetify nos mostrara el prop (elevation'sombreado') y como se renderizara -->
  <v-card elevation="3" max-width="980" class="mx-auto">
    <v-layout>
      <v-app-bar color="blue-darken-1">
        <!-- * Append coloca el contenido a la derecha y prepend a la izq -->
        <template v-slot:prepend>
          <!-- *v-btn puede usarse como router si le asignamos el :to -->
          <v-btn :to="{name: 'home'}"> Real State - VueFire </v-btn>
        </template>
        <template v-slot:append>
          <!-- *Aqui utilizamos un vif con la funcion de isAuth de nuestra store authStore  -->

          <div v-if="authStore.isAuth">
            <v-btn :to="{name: 'admin-propiedades'}"> Admin </v-btn>
            <v-btn @click="authStore.logOut" :to="{name: 'login'}">
              Log Out
            </v-btn>
          </div>
          <div v-else>
            <v-btn :to="{name: 'home'}"> Inicio </v-btn>
            <v-btn :to="{name: 'login'}"> Log in </v-btn>
          </div>
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
