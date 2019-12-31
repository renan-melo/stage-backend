<template>

  <div id="newsection" class="container d-flex flex-row justify-content-center aling-content-center">

    <div class="col-lg-11 d-flex flex-row justify-content-between aling-content-center">

    <div class="col-8 mt-5 mb-3">

      <div class="container col-12 d-flex flex-row justify-content-between aling-content-center m-0">      
        <router-link to="#" class="text-decoration-none">
          <span class="d-inline news-link-cards text-uppercase font-weight-bold text-dark h4 align-bottom">
            novidade
          </span> 
        </router-link>
        <router-link to="#" class="text-decoration-none">
          <span class="d-inline news-link-cards text-uppercase font-weight-bold text-muted text-decoration-none h6 align-bottom">
            ver mais
          </span> 
        </router-link>
      </div>

      <Card :items="items" class="col-12"/>

    </div>
    <div class="col-4 mt-5 mb-3">
      <LastNews class="d-none d-lg-block col-12"/>
    </div>

 </div>
    <!-- <button @click="load" class="btn btn-primary">Carregar mais</button>  -->

  </div>

</template>

<script>

import Card from '../../utils/Card'
import LastNews from '../../utils/LastNews'

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
        date:new Date().toLocaleDateString(),
        src:'https://i.ytimg.com/vi/KaIeyKIwDz8/maxresdefault.jpg',
        title:"God of War 4",
        category:"PS4",
        path: '/games'
        },{
        id:2,
        date:new Date().toLocaleDateString(),
        src:'https://www.elitronicos.com.br/wp-content/uploads/2019/03/1-1024_6599.jpg',
        title:'Halo 5',
        category:'Xbox One',
        path: '/games'
        },{
        id:3,
        date:new Date().toLocaleDateString(),
        src:'https://i.ytimg.com/vi/Myz5XoSePXQ/maxresdefault.jpg',
        title:"Sonic",
        category:"Filmes",
        path: '/games'
        },{
        id:4,
        date:new Date().toLocaleDateString(),
        src:'https://observatoriodegames.bol.uol.com.br/wp-content/uploads/2019/12/keanu-reeves-cyberpunk-2077-johnny-silverhand.jpg',
        title:"Cyberpunk 2077",
        category:"Platafomas",
        path: '/games'
        },{
        id:5,
        date:new Date().toLocaleDateString(),
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
#newsection .news-link-cards:hover{
  color:crimson !important;
}
</style>
