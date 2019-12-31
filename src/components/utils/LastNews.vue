<template>

  <aside id="lastnews" class="px-0 pb-3">
    <div class="title d-flex justify-content-center py-2">
      <h5 class="text-uppercase text-white m-0 d-inline align-bottom font-weight-bold">mais lidas</h5>
    </div>
    <CardLastNews :items="items"/>
  </aside>

</template>

<script>
import CardLastNews from './CardLastNews'
export default {
    name:'LastNews',
    props:{
     UL:Array
    },
    data(){
      return {
        items:[
        {
          id:1,
          src:'https://i.ytimg.com/vi/KaIeyKIwDz8/maxresdefault.jpg',
          title:"God of War 4",
          path: '/games'
        },{
          id:2,
          src:'https://www.elitronicos.com.br/wp-content/uploads/2019/03/1-1024_6599.jpg',
          title:'Halo 5',
          path: '/games'
        },{
          id:3,
          src:'https://i.ytimg.com/vi/Myz5XoSePXQ/maxresdefault.jpg',
          title:"Sonic",
          path: '/games'
        },{
          id:4,
          src:'https://observatoriodegames.bol.uol.com.br/wp-content/uploads/2019/12/keanu-reeves-cyberpunk-2077-johnny-silverhand.jpg',
          title:"Cyberpunk 2077",
          path: '/games'
        },{
          id:5,
          src:'https://www.siliconera.com/wp-content/uploads/2019/12/hellblade-2-senuas-saga-800x400.jpg',
          title:"Hellblade 2",
          path: '/games'
        },{
          id:6,
          src:'https://i.ytimg.com/vi/KaIeyKIwDz8/maxresdefault.jpg',
          title:"God of War 4",
          path: '/games'
        },{
          id:7,
          src:'https://www.elitronicos.com.br/wp-content/uploads/2019/03/1-1024_6599.jpg',
          title:'Halo 5',
          path: '/games'
        },{
          id:8,
          src:'https://i.ytimg.com/vi/Myz5XoSePXQ/maxresdefault.jpg',
          title:"Sonic",
          path: '/games'
        },{
          id:9,
          src:'https://observatoriodegames.bol.uol.com.br/wp-content/uploads/2019/12/keanu-reeves-cyberpunk-2077-johnny-silverhand.jpg',
          title:"Cyberpunk 2077",
          path: '/games'
        },{
          id:10,
          src:'https://www.siliconera.com/wp-content/uploads/2019/12/hellblade-2-senuas-saga-800x400.jpg',
          title:"Hellblade 2",
          path: '/games'
        }
      ]
      }
    },
    components:{
      CardLastNews
    }
}
</script>

<style scoped>

#lastnews {
  background: linear-gradient(to right, #414345, #232526); 
  border-radius: 10px;
}

#lastnews .title{
  background: #fe8c00; 
  background: linear-gradient(to right, #f83600, #fe8c00); 
  border-radius: 10px 10px 0 0;
}	

</style>