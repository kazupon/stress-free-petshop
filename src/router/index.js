import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'
import Cart from '../views/Cart'
import ProductDetails from '@/components/ProductDetails'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      { path: ':productId', component: ProductDetails, props: true }
    ]
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

export const routerConfig = {
  history: createWebHistory(process.env.BASE_URL),
  routes
}

export default (config = routerConfig) => createRouter(config)
