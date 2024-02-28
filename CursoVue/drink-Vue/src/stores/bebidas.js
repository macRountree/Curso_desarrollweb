import {defineStore} from 'pinia';
import {ref} from 'vue';

// * Los Store siempre inician con use el nombre y Store
/*
 * Toma 2 parametros {'identificador', (callback)=>{}}
 *identificador unico (si creamos otro store .. debe tener nombre diferente)
 */
export const useBebidasStore = defineStore('bebidas', () => {
  //*Dentro de este CB pdemos colocar diferentes funciones,(Acciones/getters/state ref o reactive)

  const categorias = ref([]);

  /*
   *Siempre tenemos que retornar algo para poderlo reutilizarlo en diferentes paginas
   */
  return {categorias};
});
