import {ref, watch, onMounted} from 'vue';
import {defineStore} from 'pinia';
import {useBebidasStore} from './bebidas';
export const useFavoritosStore = defineStore('favoritos', () => {
  const bebidas = useBebidasStore();
  const favoritos = ref([]);

  onMounted(() => {
    favoritos.value = JSON.parse(localStorage.getItem('favoritos') ?? []);
  });

  //* Watch s favoritos .. y queremos ejecutar la funcion que guarde todo en cache
  watch(
    favoritos,
    () => {
      syncLocalStorage();
    },
    {deep: true}
  );

  function syncLocalStorage() {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
  }

  function existeFavorito(id) {
    // *Queremos verificar que si un Favorito existe en LS...
    const favoritoLS = JSON.parse(localStorage.getItem('favoritos') ?? []);
    // *Utilizamos some porque en caso de que no haya nada en LS con el nombre 'favoritos' .. sera un arreglo vacio

    return favoritoLS.some(favorito => favorito.idDrink === id);
  }

  function eliminarFavorito() {
    favoritos.value = favoritos.value.filter(
      favorito => favorito.idDrink !== bebidas.receta
    );
  }
  function handleClickFavorito() {
    if (existeFavorito(bebidas.receta.idDrink)) {
    } else {
      favoritos.value.push(bebidas.receta);
    }
  }

  return {favoritos, handleClickFavorito, existeFavorito};
});
