<script setup>
import HeaderVue from './components/Header.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <HeaderVue />
  <main class="container mx-auto mt-10">
    <RouterView />

  </main>
</template>

 