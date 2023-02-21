import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import ProductGalleryView from './views/ProductGalleryView.vue'
import CartView from './views/CartView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: CartView,
      path: '/cart'
    },
    {
      component: ProductGalleryView,
      path: '/productgallery'
    },
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: HomeView,
      path: '/'
    }
  ]
})
