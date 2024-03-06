<script setup>
import RouterLinkSlot from '../components/UI/RouterLinkSlot.vue';
import ClientesService from '@/ClientesService';
import Heading from '../components/UI/Heading.vue';
import {computed, onMounted, ref} from 'vue';
import Cliente from '@/components/Cliente.vue';
//* para poder manejar la respuesta de mi endpoint necesito guardarlo en el state

const clientes = ref([]);

onMounted(() => {
  ClientesService.obtenerClientes()
    .then(({data}) => (clientes.value = data))
    .catch(error => console.log('Hubo un error', error));
});

defineProps({titulo: {type: String}});

const existenClientes = computed(() => {
  return clientes.value.length > 0;
});

//*Creamos una funcion para cambiar el estado del cliente Lo hacemos desde el padre y despues lo heredamos e los componentes hijos
//*actualizar estado necesita el id del cliente que se le quiera cambiar el estado y su estado actual
//creamos un objeto

const actualizarEstado = ({id, estado}) => {
  // console.log({id, estado});
  // *El db.json agrega llaves de true no mandamos !estado en forma de objeto
  ClientesService.cambiarEstado(id, {estado: !estado})
    .then(() => {
      //* iteramos todos losclientes y lo igualamos el id con el id del estado
      const i = clientes.value.findIndex(cliente => cliente.id === id);
      console.log(i);
      clientes.value[i].estado = !estado;
    })
    .catch(error => console.log(error));
};
const eliminarCliente = id => {
  ClientesService.eliminarCliente(id).then(() => {
    clientes.value = clientes.value.filter(cliente => cliente.id !== id);
  });
};

// * Como aqui mostraremos los clientes .. importaremos axios ..en cuando este listo el componente quiero traerme los clientes
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLinkSlot to="agregar-cliente"> Agregar Cliente </RouterLinkSlot>
    </div>
    <Heading>{{ titulo }}</Heading>

    <div
      v-if="existenClientes"
      class="flow-root mx-auto mt-10 p-5 bg-white shadow"
    >
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="p-2 text-left text-sm font-extrabold text-gray-600"
                >
                  Nombre
                </th>
                <th
                  scope="col"
                  class="p-2 text-left text-sm font-extrabold text-gray-600"
                >
                  Empresa
                </th>
                <th
                  scope="col"
                  class="p-2 text-left text-sm font-extrabold text-gray-600"
                >
                  Estado
                </th>
                <th
                  scope="col"
                  class="p-2 text-left text-sm font-extrabold text-gray-600"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
              <Cliente
                v-for="cliente in clientes"
                :key="cliente.id"
                :cliente="cliente"
                @actualizar-estado="actualizarEstado"
                @eliminar-cliente="eliminarCliente"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <p v-else class="text-center mt-10">No hay cllientes</p>
  </div>
</template>
