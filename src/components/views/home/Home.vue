<template>
  <div id="home" class="container-fluid p-0">
    <Carousel/>
    <NewsSection/>
    <Trailers/>
  </div>
</template>

<script>

import Carousel from './Carousel.vue'
import NewsSection from './NewsSection.vue'
import Trailers from './Trailers.vue'



export default {
  name: 'Home',
  components: {
   Carousel,
   NewsSection,
   Trailers
  }
}
</script>

<style>

</style>
