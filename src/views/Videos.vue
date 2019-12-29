<template>
  <div id="app">
    <navbar/>
    <!-- <Carousel/> -->
    <menusearch/>
    <noticiahome/>
    <homeVideo/>
    <Footer/>

  </div>
</template>

 


<script>
import navbar from '../components/navbar'
// import Carousel from '../components/Carousel.vue'
import menusearch from '../components/menusearch.vue'
import noticiahome from '../components/noticiahome.vue'
import homeVideo from '../components/homeVideo.vue'
import Footer from '../components/Footer.vue'

//import Vue from 'vue'



export default {
  name: 'app',
  components: {
   navbar,
  //  Carousel,
   menusearch,
   noticiahome,
   homeVideo,
   Footer
  }
}
</script>

<style>

</style>
