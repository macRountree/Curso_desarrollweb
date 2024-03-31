import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import {onAuthStateChanged} from 'firebase/auth';
import {useFirebaseAuth} from 'vuefire';

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
      meta: {requiresAuth: true},
      children: [
        {
          path: '/admin/propiedades',
          name: 'admin-propiedades',
          component: () => import('../views/admin/AdminView.vue'),
          meta: {requiresAuth: true},
        },
        {
          path: '/admin/nueva',
          name: 'nueva-propiedad',
          component: () => import('../views/admin/NuevaPropiedadView.vue'),
          meta: {requiresAuth: true},
        },
        {
          path: '/admin/editar/:id',
          name: 'editar-propiedad',
          component: () => import('../views/admin/EditarPropiedadView.vue'),
          meta: {requiresAuth: true},
        },
      ],
    },
  ],
});
//*guard de navegacion ... beforeEach() se ejecuta cada que visitemos una URL
//* toma 3 parametros to, from, next
router.beforeEach(async (to, from, next) => {
  // matched son todos las rutas que requieren auth y some devuelve true si al menos 1 elemento se hay match
  const requiresAuth = to.matched.some(url => url.meta.requiresAuth);

  if (requiresAuth) {
    try {
      await authenticateUser();
      next();
      //*Si comprobamos que el usuario esta Auth
    } catch (error) {
      //* si hay un error con la auth .. redirige hacia el login con next()
      console.log(error);
      next({name: 'login'});
    }
  }

  // console.log(requiredAuth);
  else {
    next();
  }
});
//*
function authenticateUser() {
  const auth = useFirebaseAuth();
  // *retornamos un Promise para poder tener  la funcion asincrona
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      unsubscribe();
      if (user) {
        resolve(user);
      }
      reject();
      // console.log(user);
    });
  });
}
export default router;
