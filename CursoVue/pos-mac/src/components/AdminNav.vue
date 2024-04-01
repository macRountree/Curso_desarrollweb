<script setup>
import Link from '@/components/Link.vue';
import Logo from './Logo.vue';
import {RouterLink} from 'vue-router';
</script>

<template>
  <!-- * Posicionamos Absoluto porque si no hay relative toma el doc principal y quedara flotante
     -->
  <header
    class="px-10 py-5 bg-gray-700 flex justify-between absolute top-0 w-full z-10 items-center"
  >
    <div>
      <Logo />
    </div>
    <nav>
      <!-- *Cuando instalamos vueRouter de forma global no ocupamos importar RouterLink -->
      <RouterLink
        :to="{name: 'products'}"
        class="rounded text-white p-2 font-bold"
        >Productos
      </RouterLink>
      <RouterLink :to="{name: 'sales'}" class="rounded text-white p-2 font-bold"
        >Ventas
      </RouterLink>
      <Link to="shop">Tienda</Link>
    </nav>
  </header>
</template>
