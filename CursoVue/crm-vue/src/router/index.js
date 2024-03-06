import ClientesViewVue from '../views/ClientesView.vue';
import {createRouter, createWebHistory} from 'vue-router';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'listado-clientes',
      title: 'inicio',
      component: ClientesViewVue,
      props: {titulo: 'Listado de Clientes Desde Router.js'},
    },
    {
      path: '/agregar-cliente', //si tenemos el :to="{name: ''}" en en algun View podemos modificar el nombre del path
      name: 'agregar-cliente', //*es como el id interno de cada ruta
      component: () => import('../views/NuevoClienteView.vue'),
      props: {titulo: 'Agregar Cliente desde...'},
    },
    {
      path: '/editar-cliente/:id', //si tenemos el :to="{name: ''}" en en algun View podemos modificar el nombre del path
      name: 'editar-cliente', //*es como el id interno de cada ruta
      component: () => import('../views/EditarClienteView.vue'),
      props: {titulo: 'Editar Cliente'},
    },
  ],
});

export default router;
