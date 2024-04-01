<script setup>
import Link from '@/components/Link.vue';
import Logo from '@/components/Logo.vue';
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
      <Link to="admin">Administrar</Link>
    </nav>
  </header>
</template>
