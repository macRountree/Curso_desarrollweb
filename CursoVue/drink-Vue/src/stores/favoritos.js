import {ref, watch, onMounted, computed} from 'vue';
import {defineStore} from 'pinia';
import {useBebidasStore} from './bebidas';
import {useModalStore} from './modal';
import {useNotificacionStore} from './notificaciones';
export const useFavoritosStore = defineStore('favoritos', () => {
  const bebidas = useBebidasStore();
  const modal = useModalStore();
  const notificacionesStore = useNotificacionStore();
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

  function existeFavorito() {
    // *Queremos verificar que si un Favorito existe en LS...
    const favoritoLS = JSON.parse(localStorage.getItem('favoritos')) ?? [];
    // *Utilizamos some porque en caso de que no haya nada en LS con el nombre 'favoritos' .. sera un arreglo vacio

    return favoritoLS.some(
      favorito => favorito.idDrink === bebidas.receta.idDrink
    );
  }
  function agregarFavorito() {
    favoritos.value.push(bebidas.receta);
    notificacionesStore.show = true;
    notificacionesStore.texto = 'Se agregó a favoritos';
    //   setTimeout(() => {
    //     /*
    // $reset es un metodo nativo de pinia ... donde reinicia los valores del state () que en este caso serian
    //  const texto = ref('');
    //  const error = ref(false);
    //  const show = ref(false);
    // */
    //     notificacionesStore.$reset();
    //   }, 3000);
  }

  function eliminarFavorito() {
    favoritos.value = favoritos.value.filter(
      favorito => favorito.idDrink !== bebidas.receta.idDrink
    );
    notificacionesStore.show = true;
    notificacionesStore.texto = 'Se eliminó la Receta de Favoritos';
  }
  function handleClickFavorito() {
    if (existeFavorito()) {
      eliminarFavorito();
    } else {
      agregarFavorito();
    }
    modal.modal = false;
  }

  const noFav = computed(() => {
    return favoritos.value.length === 0;
  });
  console.log(noFav);
  return {
    favoritos,
    handleClickFavorito,
    existeFavorito,
    eliminarFavorito,
    noFav,
  };
});
