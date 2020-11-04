import { fetchProducts as fetchPrductsApi } from '../../api/api'

export default {
  state() {
    return {
      products: []
    }
  },
  actions: {
    async getProduct({ state, dispatch }, id) {

      const products = !state.products.length ?
        await dispatch('fetchProducts') : state.products

      return products.filter(p => parseInt(p.id, 10) === parseInt(id, 10))[0]
    },
    async fetchProducts({ state }) {
      const response = await fetchPrductsApi()
      state.products = response.products.map(p => ({
        ...p,
        quantity: 0, // <- this is a bug. The quantity is erased every full page load. Write a test and fix it
        price: parseInt(p.price, 10)
      }))

      return state.products
    }
  },
  namespaced: true
}
