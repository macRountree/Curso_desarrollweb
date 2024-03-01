<script setup>
import Header from './components/Header.vue';
import { RouterView } from 'vue-router';
import Modal from './components/Modal.vue';
import NotificacionVue from './components/Notificacion.vue';
</script>

<template>
  <Header />
  <main class="container mx-auto mt-10">
    <RouterView />

  </main>
  <!-- *Modal son ventanas flotantes por lo que no  es necesario declararlo en el main -->
  <Modal />
  <NotificacionVue />
</template>

 