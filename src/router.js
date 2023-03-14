import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import ProductGalleryView from './views/ProductGalleryView.vue'
import CartView from './views/CartView.vue'
import LoginView from './views/LoginView.vue'
import RegisterView from './views/RegisterView.vue'
import PayView from './views/PayView.vue'
import ConfirmationView from './views/ConfirmationView.vue'
import FavoritesView from './views/FavoritesView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: FavoritesView, path: '/favorites' },
    {
      component: ConfirmationView,
      path: '/confirmation'
    },
    {
      component: PayView,
      path: '/pay'
    },
    {
      component: RegisterView,
      path: '/register'
    },
    {
      component: LoginView,
      path: '/login'
    },
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
