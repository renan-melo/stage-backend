<template>
<div id="card">
  <router-link to="/games" v-for="(item,index) in items" :key="index" class="bg media row justify-content-center align-items-center text-dark my-3">
    
      <div v-if="!item.scale" class="row">

        <div class="card-div col-6 d-flex justify-content-center align-items-center p-0">
          <a class=" p-0 m-0" href="#">
            <img :src="item.src" :alt="item.title" class="img-fluid p-0 m-0 col-md-10 col-lg-12 col-sm-5 align-self-center d-flex" >
          </a>
        </div>
    
        <div class="col-6 d-flex flex-column justify-content-center align-items-start">
          <p class="date">{{item.date}}</p>
          <h3>{{item.title}}</h3>
          <p>{{item.category}}</p>
          <p>{{item.scale}}</p>
        </div>
      </div>

      <div v-if="item.scale" class="row">

        <div class="card-div col-12 d-flex justify-content-center align-items-center p-0">
          
          <a class="row p-0 m-0" href="#">
            <img :src="item.src" :alt="item.title" class="card-img-scale img-fluid p-0 m-0 col-md-10 col-lg-12 col-sm-5 align-self-center d-flex" >
            
            <div class="row col-12 card-img-text position-absolute d-flex flex-column justify-content-center align-items-end text-white">
              <p class="date text-white">{{item.date}}</p>
              <h3>{{item.title}}</h3>
              <p>{{item.category}}</p>
              <p>{{item.scale}}</p>
            </div>

          </a>
        
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

#card .date{
  font-size: .9em;
  color: #000000b2;
}

#card h3:hover{
  color:#ff00d4;
}

#card .card-div{
   background-color:#000;
}

#card img{
   transition: opacity .5s;
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

#card .card-img-text{
  bottom: 0;
}

</style>