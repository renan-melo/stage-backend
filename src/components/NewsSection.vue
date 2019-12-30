<template>

  <div id="newsection" class="container">

    <h2 class="mt-5">Novidades</h2>

    <div class="row justify-content-between aling-content-start">
      <Card :items="items" class="col-12 col-lg-8"/>
      <LastNews class="d-none d-lg-block col-lg-3"/>
    </div>

    <button @click="load" class="btn btn-primary">Carregar mais</button> 

  </div>

</template>

<script>

import Card from './Card'
import LastNews from './LastNews'

export default {
  name: "NewsSection",
  components:{
    Card,
    LastNews
  },methods:{
    load(){
      const items = this.items
      items.forEach((item,index) => {
      index < 4 ? this.items.push(item):null
      });
    },
    scaleCards(){
      this.items.forEach((item,index) => {
      const isDivisor = Number.isInteger(index/3) 
      index > 2 && isDivisor ? item.scale = true:item.scale = false
      });
    }
  },created(){
       this.scaleCards()
  },
  data(){
    return{
      items:[
        {
        id:1,
        date:new Date().toLocaleString(),
        src:'https://i.ytimg.com/vi/KaIeyKIwDz8/maxresdefault.jpg',
        title:"God of War 4",
        category:"PS4",
        path: '/games'
        },{
        id:2,
        date:new Date().toLocaleString(),
        src:'https://www.elitronicos.com.br/wp-content/uploads/2019/03/1-1024_6599.jpg',
        title:'Halo 5',
        category:'Xbox One',
        path: '/games'
        },{
        id:3,
        date:new Date().toLocaleString(),
        src:'https://i.ytimg.com/vi/Myz5XoSePXQ/maxresdefault.jpg',
        title:"Sonic",
        category:"Filmes",
        path: '/games'
        },{
        id:4,
        date:new Date().toLocaleString(),
        src:'https://observatoriodegames.bol.uol.com.br/wp-content/uploads/2019/12/keanu-reeves-cyberpunk-2077-johnny-silverhand.jpg',
        title:"Cyberpunk 2077",
        category:"Platafomas",
        path: '/games'
        },{
        id:5,
        date:new Date().toLocaleString(),
        src:'https://www.siliconera.com/wp-content/uploads/2019/12/hellblade-2-senuas-saga-800x400.jpg',
        title:"Hellblade 2",
        category:"Xbox One",
        path: '/games'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
