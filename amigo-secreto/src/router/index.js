import Vue from 'vue'
import VueRouter from 'vue-router'
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import How from "@/views/How.vue";
import Donations from "@/views/Donations.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/como-funciona',
    name: 'How to use',
    component: How
  },
  {
    path: '/doacoes',
    name: 'Donations',
    component: Donations
  },
  {
    path: '/sobre-o-criador',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
