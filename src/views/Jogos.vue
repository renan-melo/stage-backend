<template>
  <div id="app">

    <!-- <Carousel/> -->
    <Jogosnav/>
    <menusearch/>
    <!-- <noticiahome/>
    <homeVideo/> -->
    <Footer/>

  </div>
</template>

 


<script>

// import Carousel from '../components/Carousel.vue'
import Jogosnav from '../components/Jogosnav.vue'
import menusearch from '../components/menusearch.vue'
// import noticiahome from '../components/noticiahome.vue'
// import homeVideo from '../components/homeVideo.vue'
import Footer from '../components/Footer.vue'

//import Vue from 'vue'



export default {
  name: 'app',
  components: {
  //  Carousel,
   menusearch,
   Jogosnav,
  //  noticiahome,
  //  homeVideo,
   Footer
  }
}
</script>

<style>

</style>
