<template>
  <div id="home" class="container-fluid p-0">
    <Carousel :id_group="this.$route.params.id || null"/>
    <NewsSection :id_group="this.$route.params.id"/>
    <Trailers/>
  </div>
</template>

<script>

import Carousel from '../../utils/Carousel'
import NewsSection from '../../utils/NewsSection'
import Trailers from '../../utils/Trailers'

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
