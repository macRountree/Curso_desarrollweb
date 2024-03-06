<script setup>
import {computed} from 'vue';
import {RouterLink} from 'vue-router';
const props = defineProps({cliente: {type: Object}});

defineEmits(['actualizar-estado', 'eliminar-cliente']);

//*Para no tener mucha informacion en el template utilizamos un computed para acomodar los datos
//*si queremo utilizar  el prop dentro de una funcion computed debemos crear la variable en defineProps
const nombreCliente = computed(() => {
  return `${props.cliente.nombre}  ${props.cliente.apellido}`;
});
const statusCliente = computed(() => props.cliente.estado);
</script>

<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">
        {{ nombreCliente }}
      </p>
      <p class="text-gray-500">{{ cliente.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
      <p class="text-gray-600">{{ cliente.puesto }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm">
      <!-- * Podemos utilizar  clases dinamicas :class="[]" y podemos condicionar si es true/false para que cambie el status al presionar button-->
      <button
        class="inline-flex rounded-full px-2 text-xs font-semibold leading-5"
        :class="[
          statusCliente
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800',
        ]"
        @click="
          $emit('actualizar-estado', {id: cliente.id, estado: cliente.estado})
        "
      >
        {{ statusCliente ? 'activo' : 'inactivo' }}
      </button>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <!-- * Utilizamos RouterLink porque al clickear Editar nos llevara al formulario -->
      <!-- *La ruta dinamica :to="{}" le pasamos el name de la ruta a redirigir y un params con el id de es cliente (ya que es unico) -->
      <!-- ?Params  nos genera = cliente?id=1 en el url -->
      <!-- ? tambien le pasamos query -->
      <RouterLink
        :to="{name: 'editar-cliente', params: {id: cliente.id}}"
        class="text-indigo-600 hover:text-indigo-500 mr-5"
      >
        Editar
      </RouterLink>
      <button
        class="text-red-600 hover:text-red-900"
        @click="$emit('eliminar-cliente', cliente.id)"
      >
        Eliminar
      </button>
    </td>
  </tr>
</template>

<style lang="scss" scoped></style>
