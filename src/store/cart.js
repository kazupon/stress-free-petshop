export default {
  state() {
  },
  getters: {
    productsInCartForId(_, getters) {
      return (id) => {
        if (!getters.cart.length) return []
        return getters.cart.find(c => c.id === id) || {}
      }
    },
    numberOfItems(_, getters) {
      let totalNumberOfItems = 0
      getters.cart.forEach(c => totalNumberOfItems += c.quantity)
      return totalNumberOfItems
    },
    cart(_, __, rootState) {
      return rootState.products.products.filter(p => p.quantity > 0)
    },
    total(_, getters) {
      let total = 0
      getters.cart.forEach(c => total += c.quantity * c.price)
      return total
    }
  },
  namespaced: true
}
