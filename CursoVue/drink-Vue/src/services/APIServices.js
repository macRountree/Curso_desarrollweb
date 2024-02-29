import api from '@/lib/axios';

export default {
  obtenerCategorias() {
    return api('/list.php?c=list');
  },
  buscarBebidas({categoria, nombre}) {
    return api(`/filter.php?c=${categoria}&=${nombre}`);
  },
  buscarReceta(id) {
    return api(`/lookup.php?i=${id}`);
  },
};
