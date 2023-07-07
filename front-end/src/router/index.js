import { createRouter, createWebHistory } from 'vue-router'
import ProductsPage from '../views/ProductsPage.vue'
import ProductDetailPage from '../views/ProductDetailPage.vue'
import CartPage from '../views/CartPage.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
  {
    path: '/products/:id',
    name: 'productDetail',
    component: ProductDetailPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/',
    redirect: '/products'
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
