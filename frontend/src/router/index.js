import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/views/home/Home.vue'
import Games from '../components/views/games/Games'
import Movie from '../components/views/movie/Movie.vue'
import Nostalgia from '../components/views/nostalgia/Nostalgia.vue'
import Specials from '../components/views/specials/Specials.vue'
import Content from '../components/utils/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    params:{id:null},
    path: '/',
    name: 'home',
    component: Home
  },{
    params:{id:1},
    path: '/games/:id',
    name: 'games',
    component: Games
  },{
    params:{id:2},
    path: '/movie/:id',
    name: 'movie',
    component: Movie
  },{
    params:{id:3},
    path: '/nostalgia/:id',
    name: 'nostalgia',
    component: Nostalgia
  },{
    params:{id:4},
    path: '/specials/:id',
    name: 'specials',
    component: Specials
  },{
    params:{id:null},
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
