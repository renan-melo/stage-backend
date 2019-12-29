import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Jogos from '../views/Jogos.vue'
import Analise from '../views/Analise.vue'
import Videos from '../views/Videos.vue'
import Especiais from '../views/Especiais.vue'
import Mobile from '../views/Mobile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/jogos',
    name: 'jogos',
    component: Jogos
  },
  {
    path: '/analise',
    name: 'analise',
    component: Analise
  },
  {
    path: '/videos',
    name: 'videos',
    component: Videos
  },
  {
    path: '/especiais',
    name: 'especiais',
    component: Especiais
  },{
    path: '/mobile',
    name: 'mobile',
    component: Mobile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
