import { createRouter, createWebHistory } from 'vue-router'
import main from "@/views/main.vue";
import start from "@/views/start.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      alias:'/',
      path: '/start',
      name: 'start',
      component: start
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
  ]
})

export default router
