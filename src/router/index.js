import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import News from '../views/News.vue'
import Nostalgia from '../views/Nostalgia.vue'
import Specials from '../views/Specials.vue'
import Mobile from '../views/Mobile.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/games',
    name: 'games',
    component: Games
  },
  {
    path: '/news',
    name: 'news',
    component: News
  },
  {
    path: '/nostalgia',
    name: 'nostalgia',
    component: Nostalgia
  },
  {
    path: '/specials',
    name: 'specials',
    component: Specials
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
