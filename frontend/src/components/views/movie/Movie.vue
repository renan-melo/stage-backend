<template>

  <div id="games">
    <Carousel :id_group="this.$route.params.id || null"/>
    <NewsSection :id_group="parseInt(this.$route.params.id)"/>
    <Trailers/>
  </div>
   
</template>

<script>
import Carousel from '../../utils/Carousel'
import NewsSection from '../../utils/NewsSection'
import Trailers from '../../utils/Trailers'

  export default {
    name: 'Games',
    components:{
      Carousel,
      NewsSection,
      Trailers      
    }
  }
</script>
