import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === 'production' ? '/erabbit-client-pc/' : '/'),
  routes
})

export default router
