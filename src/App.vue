<template>
  <div id="app">
    <navbar/>
    <menusob/>
    <menusearch/>
    <noticiahome/>
    <homeVideo/>
    <Footer/>

  </div>
</template>

 


<script>
import navbar from './components/navbar.vue'
import menusob from './components/menusob.vue'
import menusearch from './components/menusearch.vue'
import noticiahome from './components/noticiahome.vue'
import homeVideo from './components/homeVideo.vue'
import Footer from './components/Footer.vue'
//import Vue from 'vue'



export default {
  name: 'app',
  components: {
   navbar,
   menusob,
   menusearch,
   noticiahome,
   homeVideo,
   Footer
  }
}
</script>

<style>

</style>
