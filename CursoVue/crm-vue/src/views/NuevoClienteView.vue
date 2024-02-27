<script setup>
import Heading from '@/components/UI/Heading.vue';
import RouterLinkSlot from '@/components/UI/RouterLinkSlot.vue';


defineProps({
    titulo: {
        type: String
    }
})
const handleSubmit = (data) => {


    console.log(data)


}
</script>
<template>
    <div>

        <div class="flex justify-end">
            <RouterLinkSlot to="inicio">
                Volver
            </RouterLinkSlot>

        </div>
        <div>
            <!-- * Podemos crear Props en el objeto de cada ruta  -->
            <Heading>{{ titulo }}</Heading>
            <div class="mx-auto mt-10 bg-white shadow">
                <!--* Manera de crear Formularios en Vue  de forma personalizada -->
                <div class="mx-auto md:w-2/3 py-20 px-6">
                    <!-- *FormKit-->
                    <!-- ?Si le agregamos el atributo name.... se le asignara un nombre a la coleccion de data cuando enviemos el fomrulario -->
                    <FormKit type="form" submit-label="Agregar Cliente"
                        incomplete-message="No se pudo enviar, revisa los mensajes" @submit="handleSubmit">
                        <FormKit type="text" label="Nombre" name="nombre" placeholder="Nombre del Cliente"
                            validation="required"
                            :validation-messages="{ required: 'El nombre del Cliente es Obligatorio' }" />
                        <!-- *Validation: required es para que el nombre sea obligatorio tambien podemos agregar mas de 1 validacion en el mismo atributo -->
                        <!-- *:validation-messages: Le ponemos un nombre al required como objeto, tambien podemos agregar un mensaje en español por si aparece uno en ingles  -->
                        <FormKit type="text" label="Apellido" name="Apellido" placeholder="Apellido del Cliente"
                            validation="required"
                            :validation-messages="{ required: 'El apellido del cliente es obligatorio' }" />
                        <FormKit type="text" label="Email" name="email" placeholder="Email del Cliente"
                            validation="required|email"
                            :validation-messages="{ required: 'El email del cliente es obligatorio', email: 'Coloca un email valido' }" />
                        <FormKit type="text" label="teléfono" name="telefono" placeholder="Teléfono: XXX-XXX-XXXX"
                            validation="*matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/"
                            :validation-messages="{ matches: 'El Formato no es válido' }" />
                        <FormKit type="text" label="Empresa" name="Empresa" placeholder="Empresa de Cliente" />
                        <FormKit type="text" label="Puesto" name="Puesto" placeholder="Puesto de Cliente" />
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