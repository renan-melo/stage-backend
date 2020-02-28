<template>

   <div id="carousel" class="carousel slide" data-ride="carousel">

      <ol class="carousel-indicators">
        <li v-for="(item,index) in items" data-target="#carousel" :key="index" :data-slide-to="index" :class="item.class"></li> 
      </ol>


      <div class="carousel-inner h-100 vw-100 ">

        <div v-for="(item,index) in items" :key="index" :class="'carousel-item ' + item.class" >

          <!-- Image 1660 x 800-->
           <img :src="item.src" />

          <div class="carousel-content-title carousel-caption d-none d-md-block">
            <h3>{{item.title}}</h3>
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
import {config} from '../../config/index'

export default {
  name: 'Carousel',
  props:{
    id_group:String
  },
  data(){
    return{
      items:[]
    }
    
  }, mounted(){
        axios.get(config.URL + '/sample/database/getBanner/'+this.id_group).then((response) => {
          response.data.forEach((banner,index) => {
              banner.class =''
              if(index === 0){
                banner.class='active'
              }

            this.items.push(banner)

          });

            })  
    },
}
</script>

<style scoped>

#carousel{
  height:80vh;
}

img{
   object-fit:cover;
   object-position: top;
}

.carousel-content-title{
  background-color: rgba(0, 0, 0, 0.774);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.904);
}



</style>
