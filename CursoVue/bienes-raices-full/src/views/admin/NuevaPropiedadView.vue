<script setup>
// *utilizamos vee-validate para validacion
import {useField, useForm} from 'vee-validate';
import {validationSchema, imageSchema} from '@/validation/propiedadSchema';
import {addDoc, collection} from 'firebase/firestore';
import {useFirestore} from 'vuefire';
import {useRouter} from 'vue-router';
import 'leaflet/dist/leaflet.css';
import {LMap, LTileLayer, LMarker} from '@vue-leaflet/vue-leaflet';
import useImage from '@/composables/useImage';
import useLocationMap from '@/composables/useLocationMap';
const items = [1, 2, 3, 4, 5];
const {url, uploadImage, image} = useImage();
const {zoom, center, pin} = useLocationMap();
// console.log(image);

const db = useFirestore(); //*Esto es para que db vaya a las credenciales de Firebase
const {handleSubmit} = useForm({
  // *utilizamos el valSchema.. pero como en useForm solo utiliza 1 valSchema juntamos las 2 Schemas para validar todo
  validationSchema: {
    ...validationSchema,
    ...imageSchema,
  },
});

// *el string 'titulo' esta mapeado con el schema de validacion y debemos utilizar el v-model para acceder a la data
// *OJO el parametro de useField debe ser el mismo nombre aqui que en propiedadSchema
const titulo = useField('titulo');
const imagen = useField('imagen'); //*Las imagenes no se suben en la DB ... creamos un composable para enviarlos a firstoreCloud
const precio = useField('precio');
const habitaciones = useField('habitaciones');
const wc = useField('wc');
const estacionamiento = useField('estacionamiento');
const description = useField('description');
//En el caso de este booleano... si lo mandamos con el puro nombre lanza undefined... por lo que declararlo null y un initial value de false ya manda el log
const alberca = useField('alberca', null, {initialValue: false});

const router = useRouter();

const submit = handleSubmit(async values => {
  //*Para poder extraer unicamente la imagen (y no mandarla a db) realizamos desestructuracion de values(todo el objeto)
  //*No queremos subir la imagen en db ... lo almacenaromes en cloudStorage
  const {imagen, ...propiedad} = values;

  //* Este código es un ejemplo de como agregar datos  a firebase
  //* el parametro 'db' de collection en nuestro caso es Firebase con FireStore
  const docRef = await addDoc(collection(db, 'propiedades'), {
    propiedad,
    imagen: url.value, //Agregamos otra propiedad al objeto donde se muestre el url
    ubicacion: center.value,
  });
  console.log('Document written with ID: ', docRef.id); //*Cuando enviamos la información podemos enviarlo las veces que queramos... podemos redireccionar al usuario l panel de admin una vez enviado el submit

  // * Si enviamos docRef.id  debemos validarlo para no duplicar registros .. si hay registro enviamos a admin-propiedades
  if (docRef.id) {
    router.push({name: 'admin-propiedades'});
  }
});
console.log(submit);
</script>
<template>
  <h2 class="text-center text-h3 my-5 font-weight-bold">Nueva Propiedad</h2>
  <v-card max-width="800" flat class="mx-auto">
    <v-card-title class="text-h4 font-weight-bold my-5" tag="h3">
      Nueva Propiedad
    </v-card-title>
    <v-card-subtitle class="text-h5 py-5">
      Crea una nueva propiedad llenando el siguiente formulario
    </v-card-subtitle>
  </v-card>
  <!-- *en el vmodel debemos poner el nombre que declaramos en la variable -->
  <v-form class="mt-10">
    <v-text-field
      label="Titulo Propiedad"
      class="mb-5"
      v-model="titulo.value.value"
      :error-messages="titulo.errorMessage.value"
    />

    <v-file-input
      accept="image/jpeg"
      label="Fotografia"
      prepend-icon="mdi-camera"
      class="mt-5"
      v-model="imagen.value.value"
      :error-messages="imagen.errorMessage.value"
      @change="uploadImage"
    />
    <div v-if="image" class="my-5">
      <p class="font-weight-bold w-50">Imagen Propiedad:</p>
      <img :src="image" class="w-50 mx-auto" />
    </div>
    <!-- *Podemos validar el precio con un type pero lo haremos con veee-validate -->
    <v-text-field
      label="Precio"
      class="mb-5"
      v-model="precio.value.value"
      :error-messages="precio.errorMessage.value"
    />

    <!-- *utilizamos el sistema degrid de vuetify y encerramos los selects -->
    <v-row>
      <!-- Llenamos este select con un arreglo -->

      <v-col cols="12" md="4">
        <v-select
          :items="items"
          label="Habitaciones"
          v-model="habitaciones.value.value"
          :error-messages="habitaciones.errorMessage.value"
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          :items="items"
          label="Baños"
          v-model="wc.value.value"
          :error-messages="wc.errorMessage.value"
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <v-select
          :items="items"
          label="Lugares estacionamiento"
          v-model="estacionamiento.value.value"
          :error-messages="estacionamiento.errorMessage.value"
        ></v-select>
      </v-col>
    </v-row>

    <v-textarea
      class="mb-5"
      label="Descripción"
      v-model="description.value.value"
      :error-messages="description.errorMessage.value"
    >
    </v-textarea>
    <v-checkbox
      label="Alberca"
      v-model="alberca.value.value"
      :error-messages="alberca.errorMessage.value"
    />
    <h2 class="font-weight-bold text-center my-5">Ubicación</h2>
    <!-- *Utilizamos un composable para reutilizar el mapa (useLocationMap) -->
    <div class="pb-5">
      <div style="height: 600px">
        <LMap v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
          <!-- ? prop lat-lng le pasamos las coordenadas y dragabble es para que el pin se mueeva  @moveend es para capturar las coordendadas en el pin -->
          <LMarker :lat-lng="center" draggable @moveend="pin" />
          <LTileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          ></LTileLayer>
        </LMap>
      </div>
    </div>
    <v-btn block color="pink-accent-3" @click="submit">Agregar Propiedad</v-btn>
  </v-form>
</template>
