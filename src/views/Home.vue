<template>
  <div id="home">
    <Carousel/>
    <menusearch/>
    <noticiahome/>
    <homeVideo/>
    <Footer/>

  </div>
</template>

 


<script>

import Carousel from '../components/Carousel.vue'
import menusearch from '../components/menusearch.vue'
import noticiahome from '../components/noticiahome.vue'
import homeVideo from '../components/homeVideo.vue'
import Footer from '../components/Footer.vue'
//import Vue from 'vue'



export default {
  name: 'Home',
  components: {
   Carousel,
   menusearch,
   noticiahome,
   homeVideo,
   Footer
  }
}
</script>

<style>

</style>
