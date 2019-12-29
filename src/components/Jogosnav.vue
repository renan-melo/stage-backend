<template>

    
<div class="layout container-fluid p-5">

  <h1 class="text-center ">JOGOS</h1>

             <Cardjogos :items="items"/>

</div>

</template>

<script>

import Cardjogos from './Cardjogos'
export default {
    name:'SocialMedia',
    components:{
      Cardjogos,
    },
    data() {
    return{
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

<style scoped>

   #socialMedia li i{
       font-size: 16pt;
       color: #fff;
   } 

   #socialMedia ul {
      list-style-type: none;
   } 

   #socialMedia li i:hover{
     transform: scale(1.2);
     transition: transform .2s;
   }

   .layout {
     background-color: rgba(0, 0, 0, 0.438);
   }

</style>