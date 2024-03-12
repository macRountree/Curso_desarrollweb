import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminLayout.vue'),
      // *Utilizamos meta para proteger toda la info de los hijos lo declaramos en el padre('admin') y protegerea a las rutas hijas
      meta: {requiredAuth: true},
      children: [
        {
          path: '/admin/propiedades',
          name: 'admin-propiedades',
          component: () => import('../views/admin/AdminView.vue'),
          meta: {requiredAuth: true},
        },
        {
          path: '/admin/nueva',
          name: 'nueva-propiedad',
          component: () => import('../views/admin/NuevaPropiedadView.vue'),
          meta: {requiredAuth: true},
        },
        {
          path: '/admin/editar/:id',
          name: 'editar-propiedad',
          component: () => import('../views/admin/EditarPropiedadView.vue'),
          meta: {requiredAuth: true},
        },
      ],
    },
  ],
});
//*guard de navegacion ... beforeEach() se ejecuta cada que visitemos una URL
//* toma 3 parametros to, from, next
router.beforeEach((to, from, next) => {
  // matched son todos las rutas que requieren auth y some devuelve true si al menos 1 elemento se hay match
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth);

  if (requiresAuth) {
  }

  // console.log(requiredAuth);
  else {
    next();
  }
});
export default router;
