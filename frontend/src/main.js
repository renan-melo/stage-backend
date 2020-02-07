import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import axios from 'axios'
import 'simplemde/dist/simplemde.min.css'
import VueAxios from 'vue-axios'
import { PaginationControl, PaginationPage } from 'vue-smart-pagination'



Vue.component('PaginationControl', PaginationControl)

Vue.component('PaginationPage', PaginationPage)

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
