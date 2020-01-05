import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/views/home/Home.vue'
import Games from '../components/views/games/Games'
import News from '../components/views/news/News.vue'
import Nostalgia from '../components/views/nostalgia/Nostalgia.vue'
import Specials from '../components/views/specials/Specials.vue'
import Mobile from '../components/views/mobile/Mobile.vue'
import Content from '../components/utils/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path: '/games',
    name: 'games',
    component: Games
  },{
    path: '/news',
    name: 'news',
    component: News
  },{
    path: '/nostalgia',
    name: 'nostalgia',
    component: Nostalgia
  },{
    path: '/specials',
    name: 'specials',
    component: Specials
  },{
    path: '/mobile',
    name: 'mobile',
    component: Mobile
  },{
    path: '/content/:id',
    name: 'content',
    component: Content
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
