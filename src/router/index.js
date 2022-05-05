import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/xtx-layout'),
    children: [
      {
        path: '/',
        component: () => import('@/views/home/home-page')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/erabbit-client-pc/' : '/'),
  routes
})

export default router
