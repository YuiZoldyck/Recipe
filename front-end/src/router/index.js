import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue';
import Products from '../views/Products.vue'
import Browse from '../views/Browse.vue'
import Cart from '../views/Cart.vue'
import BlogView from '../views/Blog.vue'
import AdminView from '../views/Admin.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/browse',
    name: 'Browse',
    component: Browse
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogView
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
