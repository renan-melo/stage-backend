<template>
  <div id="games">

    <div class="layout container-fluid p-5">
      <h1 class="text-center ">JOGOS</h1>
        <Cardgames :items="items"/>
    </div>
  </div>
   
</template>

 


<script>
import Cardgames from '../components/Cardgames'
  export default {
    name: 'Games',
    components:{
      Cardgames
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
        },{
        id:2,
        title:"fala memo",
        },{
        id:2,
        title:"fala memo",
        },{
        id:2,
        title:"fala memo",
        },{
        id:2,
        title:"fala memo",
        },{
        id:2,
        title:"fala memo",
        },{
        id:2,
        title:"fala memo",
        },{
        id:2,
        title:"fala memo",
        },{
        id:2,
        title:"fala memo",
        },
      ]
    }
    } 
  }
</script>

<style>


</style>
