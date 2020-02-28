import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import axios from 'axios'
import 'simplemde/dist/simplemde.min.css'
import VueAxios from 'vue-axios'

//http://stategames1-com-br.umbler.net
const URL_BASE = 'http://localhost:8080'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  router,
  URL_BASE,
  render: h => h(App)
}).$mount('#app')
