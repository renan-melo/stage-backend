<template>

   <div id="carousel" class="carousel slide" data-ride="carousel">

      <ol class="carousel-indicators">
        <li v-for="(item,index) in items" data-target="#carousel" :key="index" :data-slide-to="index" :class="item.class"></li> 
      </ol>


      <div class="carousel-inner">

        <div v-for="(item,index) in items" :key="index" :class="'carousel-item ' + item.class" >

          <!--<img :src="item.src" class="img-fluid d-block"/>-->
           <img :src="`../assets/${items.src}.jpg`" class="img-fluid d-block"/>

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
          src:"ff",
          title:"Passear com a familia é bom demais",
          subtitle:"Depois de um belo passeio, nada melhor que brocar um Xtudão!!!",
          class:"active"
        },{
          src:"f",
          title:"Passear com a familia é bom demais",
          subtitle:"Depois de um belo passeio, nada melhor que brocar um Xtudão!!!",
          class:""
        },{
          src:"f",
          title:"Passear com a familia é bom demais",
          subtitle:"Depois de um belo passeio, nada melhor que brocar um Xtudão!!!",
          class:""
        },{
          src:"f",
          title:"Passear com a familia é bom demais",
          subtitle:"Depois de um belo passeio, nada melhor que brocar um Xtudão!!!",
          class:""
        },
      ]
    }
    
  }
  
}
</script>

<style scoped>

.carousel-content-title{
  background-color: rgba(0, 0, 0, 0.568);
  box-shadow: 6px 6px 10px rgba(0, 0, 0, 0.904);
}

</style>
