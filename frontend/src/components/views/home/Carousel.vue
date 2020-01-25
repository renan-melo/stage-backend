<template>

   <div id="carousel" class="carousel slide" data-ride="carousel">

      <ol class="carousel-indicators">
        <li v-for="(item,index) in items" data-target="#carousel" :key="index" :data-slide-to="index" :class="item.class"></li> 
      </ol>


      <div class="carousel-inner">

        <div v-for="(item,index) in items" :key="index" :class="'carousel-item ' + item.class" >

          <!-- Image 1660 x 800-->
           <img :src="item.src" class="object-fit_fill"/>

          <div class="carousel-content-title carousel-caption d-none d-md-block">
            <h3>{{item.title}}</h3>
            <p> {{item.subtitle}}</p>
          </div>
        </div>

      </div>

      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
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

export default {
  name: 'Carousel',
  data(){
    return{
      items:[
        {
          src:'https://www.gamewallpapers.com/img_script/wallpaper_dir/img.php?src=wallpaper_call_of_duty_ww2_01_2560x1080.jpg&height=506',
          title:'Call of Duty',
          subtitle:'Call of Duty Mobile é anunciado para Android e iOS',
          class:'active'
        },{
          src:'https://i.imgur.com/hbuzqMf.jpg',
          title:'The Witcher 3',
          subtitle:'The Witcher 3: Wild Hunt é um jogo eletrônico de ação do subgênero RPG desenvolvido pela CD Projekt RED',
          class:''
        },{
          src:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/main_element/public/media/image/2018/11/analisis-fallout-76-ps4-xbox-one-pc.jpg?itok=BeMnIhRX',
          title:'Fallout 76',
          subtitle:'Análise | Fallout 76 é uma trágica experimentação de multiplayer que deu errado',
          class:''
        },{
          src:'https://static.madinfinite.com/images/big/6/desenvolvedores-explicam-novo-sistema-de-loot-boxes-de-rocket-league-005378.jpg',
          title:'Rocket League',
          subtitle:'Desenvolvedores explicam novo sistema de loot boxes de Rocket League',
          class:''
        },
      ]
    }
    
  }
  
}
</script>

<style scoped>

.carousel img{
  width: 100vw;
  height: 88vh;
  object-fit: fill !important;
  object-position: 50% 50%  !important;
}

.carousel-content-title{
  background-color: rgba(0, 0, 0, 0.774);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.904);
}

</style>
