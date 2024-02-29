import {defineStore} from 'pinia';
import {onMounted, reactive, ref} from 'vue';
import APIServices from '@/services/APIServices';
import {useModalStore} from './modal';
// * Los Store siempre inician con use el nombre y Store
/*
 * Toma 2 parametros {'identificador', (callback)=>{}}
 *identificador unico (si creamos otro store .. debe tener nombre diferente)
 */
export const useBebidasStore = defineStore('bebidas', () => {
  // ? Nos traemos el Store del Modal...{se puede realizar stores anidados (Muy reccomendable)}}
  // ? Como el modal queremos que aparezca cuando presionamos el boton ver receta... debemos colocar el modal en la funcion seleccionaBebida
  const modal = useModalStore();
  //*Dentro de este CB pdemos colocar diferentes funciones,(Acciones/getters/state ref o reactive)

  const categorias = ref([]);
  //*Creamos otro state reactive  .. un objeto que almacena nombre y categoria para que se guarde en pinia lo que busquemos en el form */
  const busqueda = reactive({
    nombre: '',
    categoria: '',
  });

  //* Almacena la lista de recetas y las muestra
  const recetas = ref([]);
  //*Cuando consumimos el endpoint recibimos mucha info por eso utilizamos el ({})
  const receta = ref({});

  /*
   *Podemos utilizar los métodos del ciclo de vida dentro de las Stores con pinia creadas
   */
  onMounted(async () => {
    //*Otra forma de desestructurar la data con propiedades anidadas
    const {
      data: {drinks}, //* data.data.drinks
    } = await APIServices.obtenerCategorias();
    categorias.value = drinks;
  });
  //*Si escribimos una funcion en el state las BPracticas de Pinia recomiendan no utilizar arrowF (si sepuede)

  async function obtenerBebidas() {
    //*Para no estar llamando a la API y que no esté atada a una sola funcion creamos carpeta de servicios y config de API
    const {
      data: {drinks},
    } = await APIServices.buscarBebidas(busqueda);
    //*creamos una variable ref de recetas y la igualamos al drinks  de la data
    recetas.value = drinks;

    console.log(recetas.value);
  }

  async function seleccionaBebida(id) {
    const {
      data: {drinks},
    } = await APIServices.buscarReceta(id);

    //*como obtenemos la data de receta
    receta.value = drinks[0];
    modal.handleClickModal();
  }

  /*
   * Siempre tenemos que retornar algo para poderlo reutilizarlo en diferentes paginas
   */
  return {
    categorias,
    busqueda,
    recetas,
    receta,
    seleccionaBebida,
    obtenerBebidas,
  };
});
