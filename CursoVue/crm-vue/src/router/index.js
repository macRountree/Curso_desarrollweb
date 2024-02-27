import ClientesViewVue from '../views/ClientesView.vue';
import {createRouter, createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: ClientesViewVue,
      props: {titulo: 'Listado de Clientes Desde Router.js'},
    },
    {
      path: '/agregar-cliente', //si tenemos el :to="{name: ''}" en en algun View podemos modificar el nombre del path
      name: 'agregar-cliente',
      component: () => import('../views/NuevoClienteView.vue'),
      props: {titulo: 'Agregar Cliente desde...'},
    },
  ],
});

export default router;
