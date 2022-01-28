import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/details/:id',
    name: 'Details',
    component: () => import('../views/Details.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue'),
  },
];

const router = new VueRouter({ routes, mode: 'history' });

export default router;
