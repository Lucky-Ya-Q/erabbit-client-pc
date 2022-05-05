import { createStore } from 'vuex'
import user from '@/store/modules/user'
import cart from '@/store/modules/cart'
import category from '@/store/modules/category'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedstate({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
