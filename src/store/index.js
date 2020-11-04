import { createStore } from 'vuex'
import products from './products'
import cart from './cart'

export const storeConfig = {
  modules: {
    cart,
    products
  }
}

// This lets you setup and tear down your store over and over again
// When you start to add plugins into your store, this is VERY useful
export default (config = storeConfig) => createStore(config)
