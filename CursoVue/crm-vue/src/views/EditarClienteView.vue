<script setup>
import Heading from '@/components/UI/Heading.vue';
import RouterLinkSlot from '@/components/UI/RouterLinkSlot.vue';
import {useRoute, useRouter} from 'vue-router';
import ClientesService from '@/ClientesService';
import {computed, onMounted, reactive, ref} from 'vue';
const route = useRoute(); //* Para obtener el valor de la url especifica podemos utilizar useRoute()
const router = useRouter();
// console.log(route);
console.log('este es el ROUTE', route.params); //*aparece el id en params porque en el router de /editar-cliente/:id le pasamos el id
console.log('Este es el router', router);

//*Como en Route ya ubicamos el id especifico con params.. debemos extraerlo guardandolo en una variable

const {id} = route.params;

//* Si queremos crear un prellenado a nuestro form podemos crear un objeto  y desplegarlo a cada input
const formData = ref({});
//*COMO ya tenemos el id de nuestro cliente especifico... debemos traernos toda su info y lo hacemos con unmounted

onMounted(() => {
  ClientesService.obtenerCliente(id)
    // *Como en data recibimos todos los datos del cliente por medio del id ... podemos asignarle el form data
    //* OJO para que renderize el nombre en el input del formulario ... DEBEMOS hacer reactive el formDATA y en el template aplicamos v-model a ese formData en el input del Nomnre
    .then(
      ({data}) =>
        /**Esta es una forma muy larga.... podemos utilizar un ref en el formDatavacio y hacerlo de la siguiente manera */
        // (formData.nombre = data.nombre),
        // (formData.apellido = data.apellido),
        // (formData.email = data.email),
        // (formData.telefono = data.telefono),
        // (formData.empresa = data.empresa),
        // (formData.puesto = data.puesto)

        (formData.value = data)
    )
    .catch(error => console.log(error));
});

defineProps({
  titulo: {
    type: String,
  },
});
const handleSubmit = data => {
  // cuando actualizemos el cliente Entonces redireccionamos a /listadoclientes Ya con el cliente editado
  ClientesService.actualizarCliente(id, data).then(() =>
    router.push({name: 'listado-clientes'}).catch(error => console.log(error))
  );
};
</script>

<template>
  <div>
    <div class="flex justify-end">
      <RouterLinkSlot to="listado-clientes"> Volver </RouterLinkSlot>
    </div>
    <div>
      <!-- * Podemos crear Props en el objeto de cada ruta  -->
      <Heading>{{ titulo }}</Heading>
      <div class="mx-auto mt-10 bg-white shadow">
        <!--* Manera de crear Formularios en Vue  de forma personalizada -->
        <div class="mx-auto md:w-2/3 py-20 px-6">
          <!-- *FormKit-->
          <!-- ?Si le agregamos el atributo name.... se le asignara un nombre a la coleccion de data cuando enviemos el fomrulario -->
          <FormKit
            type="form"
            submit-label="Guardar Cambios"
            incomplete-message="No se pudo enviar, revisa los mensajes"
            @submit="handleSubmit"
            :value="formData"
          >
            <FormKit
              type="text"
              label="Nombre"
              name="nombre"
              placeholder="Nombre del Cliente"
              validation="required"
              :validation-messages="{
                required: 'El nombre del Cliente es Obligatorio',
              }"
              v-model="formData.nombre"
            />
            <!-- *Validation: required es para que el nombre sea obligatorio tambien podemos agregar mas de 1 validacion en el mismo atributo -->
            <!-- *:validation-messages: Le ponemos un nombre al required como objeto, tambien podemos agregar un mensaje en español por si aparece uno en ingles  -->
            <FormKit
              type="text"
              label="apellido"
              name="apellido"
              placeholder="Apellido del Cliente"
              validation="required"
              :validation-messages="{
                required: 'El apellido del cliente es obligatorio',
              }"
              v-model="formData.apellido"
            />
            <FormKit
              type="text"
              label="Email"
              name="email"
              placeholder="Email del Cliente"
              validation="required|email"
              :validation-messages="{
                required: 'El email del cliente es obligatorio',
                email: 'Coloca un email valido',
              }"
              v-model="formData.email"
            />
            <FormKit
              type="text"
              label="teléfono"
              name="telefono"
              placeholder="Teléfono: XXX-XXX-XXXX"
              validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
              :validation-messages="{matches: 'El Formato no es válido'}"
              v-model="formData.telefono"
            />
            <FormKit
              type="text"
              label="Empresa"
              name="empresa"
              placeholder="Empresa de Cliente"
              v-model="formData.empresa"
            />
            <FormKit
              type="text"
              label="Puesto"
              name="puesto"
              placeholder="Puesto de Cliente"
              v-model="formData.puesto"
            />
            <!-- * -->
          </FormKit>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* Podemos modificar las clases por default de formKit */
.formkit-wrapper {
  max-width: 100%;
}
</style>
