import InicioViewVue from '@/views/InicioView.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'inicio', component: InicioViewVue},
    {
      path: '/favoritos',
      name: 'favoritos',
      component: () => import('../views/FavView.vue'),
    },
  ],
});

export default router;
