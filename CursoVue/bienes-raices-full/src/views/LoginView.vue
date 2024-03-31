<script setup>
//*UseForm: tendra el metodo para enviar el Submit
//*UseFiedl: nos permite atar cierto modelo a un input y la validación
import {useForm, useField} from 'vee-validate';
import {loginSchema as validationSchema} from '@/validation/loginSchema';
import {useAuthStore} from '@/stores/authStore';
//!importamos la store de Auth

// *Podemos pasarle nuestro Schema de validacion al useForm a traves de un objeto
const {handleSubmit} = useForm({
  validationSchema,
}); //unimos los objetos validSchema e imageSchema porque son obligatorios
const auth = useAuthStore();
const email = useField('email'); //*No son ref
const password = useField('password'); //*NO son refs
// console.log('Email', email);

const submit = handleSubmit(values => {
  auth.login(values);
});
//* Aqui realizamos la auth para despues utilizar pinia
</script>

<template>
  <!-- *flat elimina la sombra por defecto del v-card -->
  <v-card flat max-width="600" class="mx-auto my-5">
    <v-card-title class="text-h4 font-weight-bold my-5" tag="h3">
      Iniciar Sesión
    </v-card-title>
    <v-card-subtitle class="text-h5">
      Iniciar Sesión con tu cuenta
    </v-card-subtitle>

    <v-alert
      v-if="auth.hasError"
      class="my-3"
      :title="auth.errorMessage"
      type=" error"
    ></v-alert>

    <v-form class="my-5">
      <!-- *asociamos las validaciones por v-model -->
      <v-text-field
        class="mb-3"
        type="email"
        label="Email"
        bg-color="blue-gray-lighten-5"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
      />
      <v-text-field
        class="mb-3"
        type="password"
        label="Password"
        bg-color="blue-gray-lighten-5"
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
      />
      <!-- *block toma el ancho de pantalla -->
      <v-btn block color="pink-accent-3" @click="submit">Iniciar Sesión</v-btn>
    </v-form>
  </v-card>
</template>
