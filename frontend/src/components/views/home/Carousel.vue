<template>

   <div id="carousel" class="carousel slide" data-ride="carousel">

      <ol class="carousel-indicators">
        <li v-for="(item,index) in items" data-target="#carousel" :key="index" :data-slide-to="index" :class="item.class"></li> 
      </ol>


      <div class="carousel-inner h-100">

        <div v-for="(item,index) in items" :key="index" :class="'carousel-item ' + item.class" >

          <!-- Image 1660 x 800-->
           <img :src="item.src" />

          <div class="carousel-content-title carousel-caption d-none d-md-block">
            <h3>{{item.title}}</h3>
            <p> {{item.subtitle}}</p>
          </div>
        </div>

      </div>

      <a class="carousel-control-prev " href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only">avançar</span>
        </a>
    </div>

  

</template>

<script>

import axios from 'axios'

export default {
  name: 'Carousel',
  props:{
    id_group:String
  },
  data(){
    return{
      items:[
        {
          src:'https://thumbies.net/wp-content/uploads/2019/11/Clean-3.png',
          title:'Call of Duty',
          subtitle:'Call of Duty Mobile é anunciado para Android e iOS',
          class:'active'
        },{
          src:'https://media.indiedb.com/images/members/1/527/526666/the_witcher_3_wild_hunt_geralt_trophies-1920x1080.jpg',
          title:'The Witcher 3',
          subtitle:'The Witcher 3: Wild Hunt é um jogo eletrônico de ação do subgênero RPG desenvolvido pela CD Projekt RED',
          class:''
        },{
          src:'https://wallpaperplay.com/walls/full/0/9/e/293978.jpg',
          title:'Ciberpunk 2077',
          subtitle:'Análise | Fallout 76 é uma trágica experimentação de multiplayer que deu errado',
          class:''
        },{
          src:'https://rocketleague.media.zestyio.com/rl_rp4_key-art_no-logos.c0c5d95976999dafdcfb47136b8bddec.rk8MrNESr.jpg',
          title:'Rocket League',
          subtitle:'Desenvolvedores explicam novo sistema de loot boxes de Rocket League',
          class:''
        },
      ]
    }
    
  }, mounted(){
        axios.get('http://localhost:3000/sample/database/getBanner/'+this.id_group).then((response) => {
             console.log(this.id_group);
             console.log(response.data)
            //  const data = {
            //      id:parseInt(this.$route.params.id),
            //      qtd_view:this.item.qtd_view + 1
            //  }
            })  
    },
}
</script>

<style scoped>

#carousel{
  height:80vh;
}
.carousel-content-title{
  background-color: rgba(0, 0, 0, 0.774);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.904);
}



</style>
