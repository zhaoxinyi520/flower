import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test1',
      name: 'test',
      component: () => import('@/views/TestView.vue')
    },
    {
      path: '/html',
      name: 'html',
      component: () => import('@/views/HtmlView.vue')
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/flower/Index.vue')
    }
  ]
})

export default router
