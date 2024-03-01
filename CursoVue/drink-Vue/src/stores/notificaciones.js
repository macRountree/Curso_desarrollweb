import {defineStore} from 'pinia';
import {ref, watchEffect} from 'vue';

export const useNotificacionStore = defineStore('notificacion', () => {
  //* Hacer un  state para que muestre la notificacion segun las acciones del usuario .. un texto de error y de éxito
  //* mostrador de la vista

  const texto = ref('');
  const error = ref(false);
  const show = ref(false);

  /**
   * Existe otro parecido al watch llamado wactchEffect puede recibir varios valores en lugar de 1
   */

  watchEffect(() => {
    if (show.value) {
      setTimeout(() => {
        texto.value = '';
        error.value = false;
        show.value = false;
      }, 3000);
    }
  });

  // *importamos watch para tener nuestra funcion de reset en todas las instancias de mi store
  // watch(show, () => {
  //   if (show) {
  //     setTimeout(() => {
  //       texto.value = '';
  //       error.value = false;
  //       show.value = false;
  //     }, 3000);
  //   }
  // });

  //*

  return {texto, error, show};
});
