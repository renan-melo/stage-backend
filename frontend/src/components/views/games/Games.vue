<template>

  <div id="games">
     <Content/>
    <NewsSection :id_group="parseInt(this.$route.params.id)"/>
    <h1>Games</h1>
   
  </div>
   
</template>

<script>
import Content from '../../utils/Content.vue'
import NewsSection from '../../utils/NewsSection'

  export default {
    name: 'Games',
    components:{
      Content,
      NewsSection,
    },
    data() {
    return {
      items:[
        {
          id:1,
          title:"God of War",
        },{
          id:2,
          title:"Uncharted",
        },{
          id:2,
          title:"Days gone",
        },{
          id:2,
          title:"Horizon zero dawn",
        }
      ]
    }
    } 
  }
</script>

<style>


</style>
