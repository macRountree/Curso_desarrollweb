<script setup>
import AdminNav from '../../components/AdminNav.vue';
import {RouterView} from 'vue-router';
</script>
<template>
  <AdminNav />
  <!-- *Recordar que tenemos el absolute en adminNav l  -->
  <div class="pt-32 container mx-auto lg:min-h-screen">
    <RouterView />
  </div>
</template>
