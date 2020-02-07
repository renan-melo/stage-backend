<template>
<div id="card">

  <router-link :to="item.path || '#'" v-for="(item,index) in items" :key="index" class="card-router media container justify-content-center align-items-center text-dark my-3">
    
      <div v-if="!item.scale" class="row">

        <div class="card-div-small col-6 d-flex justify-content-center align-items-center p-0">
          <a class=" p-0 m-0" href="#">
            <img :src="item.img_card" :alt="item.title" class="image img-fluid img-scale-small p-0 m-0 col-md-10 col-lg-12 col-sm-5 align-self-center d-flex" >
          </a>
        </div>
 
        <div class="col-6 py-1 d-flex flex-column justify-content-between align-items-start">
          <p class="p-0 m-0 text-muted">{{item.date}}</p>
          <h3 class="p-0 m-0">{{item.title}}</h3>
          <p class="p-0 m-0">{{item.category}}</p>
        </div>
      </div>

      <div v-if="item.scale" class="row">

        <div class="card-div-medium col-12 d-flex justify-content-center align-items-center p-0">
          
            <img :src="item.img_card" :alt="item.title" class="img-fluid img-scale-medium p-0 m-0 col-12 align-self-center d-flex" >
            
            <div class="row col-12 p-0 img-text-scale-medium position-absolute d-flex flex-column justify-content-center align-items-end text-white">
              <p class="date text-white">{{item.date}}</p>
              <h3>{{item.title}}</h3>
              <p>{{item.category}}</p>
            </div>

        </div>   
        
      </div>

  </router-link>

</div>

</template>

<script>
export default {
    name:'Card',
    props:{
     items:Array
    }
}
</script>

<style scoped>
#card a{
  text-decoration:none !important;
  outline: none;
}

#card .card-router{
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.267);
  border-radius: 10px;
  transition: all .4s ease;
  background-color: #fff;
   cursor: pointer;
}

#card .card-router:hover{
      transform: translate(0,-2px);
      box-shadow: 1px 1px 4px 0 rgba(0,0,0,.2);
}

#card h3:hover{
  color:#ff00d4;
}

#card .card-div-small{
   background-color:#000;
   border-radius: 10px 0 0 10px;
}

#card .card-div-medium{
   background-color:#000;
   border-radius: 10px;
}

#card img{
   box-shadow: 1px 0 4px rgba(0, 0, 0, 0.267);
}

#card .img-scale-small{
  transition: opacity .5s;
  border-radius: 10px 0 0 10px;
}

#card .img-scale-medium{
  transition: opacity .5s;
  border-radius: 10px;
}

#card img:hover{
   opacity: .7;
}

#card .card-img-scale{
  opacity: .8;
}

#card .card-img-scale:hover{
  opacity: .4;
}

#card .img-text-scale-medium{
  bottom: 0;
}
@media screen and (max-width: 600px) {
  .image {
    height: 25vh;
    object-fit: fill !important;
    object-position: 50% 50%  !important;
   
  }
}

</style>