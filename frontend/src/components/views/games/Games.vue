<template>

  <div id="games">
     <Content/>
    <h1>Games</h1>
   
  </div>
   
</template>

<script>
import Content from '../../utils/Content.vue'
  export default {
    name: 'Games',
    components:{
      Content
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
