import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Page from "../views/PageView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: "/page/:name",
      name: "Page",
      component: Page,
    },
    {
      path: "/:catchAll(.*)",
      name: 'not_found',
      component: () => import('../views/NotFound.vue')
    },
  ]
})

export default router
