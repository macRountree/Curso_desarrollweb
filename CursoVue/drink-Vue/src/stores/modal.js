import {computed, ref} from 'vue';
import {defineStore} from 'pinia';
import {useFavoritosStore} from './favoritos'; //*importamos el store de fav al modal.... ya que requerimos  todo lo de Fav para poder quitar del modal el boton favoritos del modal Ddentro de la pagina de favoritos
import {useBebidasStore} from './bebidas';
export const useModalStore = defineStore('modal', () => {
  const favoritos = useFavoritosStore();
  const modal = ref(false);
  const bebidas = useBebidasStore();
  //*Acciones = Funciones que modifican State

  function handleClickModal() {
    modal.value = !modal.value;
  }

  //* Como el botón estará cambiando mucho .. importamos computed de vue para poder manejar esos cambios

  const textBoton = computed(() => {
    // *a existefavorito le mandamos el id de la bebida (recordar que siempre le tenemos que pasar el id)
    return favoritos.existeFavorito(bebidas.receta.idDrink)
      ? 'eliminar Favorito'
      : 'Agregar a favoritos';
  });

  return {modal, textBoton, handleClickModal};
});
