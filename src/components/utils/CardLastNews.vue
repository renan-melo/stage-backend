<template>
<div id="cardlastnews">

  <router-link :to="item.path" v-for="(item,index) in items" :key="index" class="card-router media container justify-content-center align-items-center text-dark my-3">

        <div class="card-div-small col-6 d-flex justify-content-center align-items-center p-0">
          <a class=" p-0 m-0" href="#">
            <img :src="item.src" :alt="item.title" class="img-fluid img-scale-small p-0 m-0 col-md-10 col-lg-12 col-sm-5 align-self-center d-flex" >
          </a>
        </div>
    
        <div class="col-6 py-1 d-flex flex-column justify-content-between align-items-start">
          <span class="title p-0 m-0 text-white">{{item.title}}</span>
        </div>

  </router-link>

</div>

</template>

<script>
export default {
    name:'CardLastNews',
    props:{
     items:Array
    }
}
</script>

<style scoped>

#cardlastnews a{
  text-decoration:none !important;
  outline: none;
}

#cardlastnews .title{
  font-size: .9rem;
  transition: color .5s;
}

#cardlastnews .title:hover{
  color:#fe8c00 !important;
}

#cardlastnews h3:hover{
  color:#ff00d4;
}

#cardlastnews img{
   box-shadow: 1px 0 4px rgba(0, 0, 0, 0.267);
   transition: opacity .5s;
}

#cardlastnews img:hover{
   opacity: .7;
}

</style>