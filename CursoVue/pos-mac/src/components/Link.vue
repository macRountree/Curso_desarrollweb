<script setup>
import {RouterLink} from 'vue-router';

defineProps({to: {type: String}});
</script>

<template>
  <!-- *Le pasamos un prop to (dentro de name) -->
  <RouterLink
    :to="{name: to}"
    class="rounded bg-green-400 hover:bg-green-500 font-bold py-2 px-10"
  >
    <slot> </slot
  ></RouterLink>
</template>
