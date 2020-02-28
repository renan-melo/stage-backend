<template>

  <nav id="navbar" class="navbar navbar-expand-lg">

    <div class="container-fluid mr-8 justify-content-between align-items-center">
      
      <a class="navbar-brand ml-4 mx-0 py-3 text-white col-8 col-lg-2 justify-content-flex" href="#"></a>

      <button class="navbar-toggler navbar-dark" type="button " data-toggle="collapse"  data-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse col-12 col-lg-9 p-0 justify-content-between align-items-center" id="nav">

        <div class="col-5 col-lg-9">
          <ul class="row p-4 justify-content-between p-0 m-0 ">
            <li v-for="(item,index) in items"  :key="index" class="nav-item nav-item-link p-0 py-2" @click="activeIndex=false">
                  <router-link :class="`nav-link link text-left px-0 ${index===activeIndex?'active':''}`" :to="item.path" >{{item.name}}</router-link>
            </li>
          </ul>
        </div>

        <SocialMedia class="col-12 col-lg-2"/>

      </div>

    </div>

  </nav>

</template>

<script>

import SocialMedia from '../commons/SocialMedia'

export default {
  name: "NavBar",
  components:{
    SocialMedia
  },
  data(){
    return{
      activeIndex:0,
      items:[
        {
          name:'home'.toUpperCase(),
          path:'/',
          active:true
        },{
          name:'games'.toUpperCase(),
          path:'/games/1',
          active:false
        },{
          name:'filmes'.toUpperCase(),
          path:'/movie/2',
          active:false
        },{
          name:'nostalgia'.toUpperCase(),
          path:'/nostalgia/3',
          active:false
        },{
          name:'especial'.toUpperCase(),
          path:'/specials/4',
          active:false
        }
      ],
    }
  }
};

</script>

<style scoped>

#navbar{
  background-color: rgb(0, 0, 0);
}

#navbar .navbar-brand {
  transition: transform .5s, color .5s;
}

#navbar .navbar-brand:hover {
  color: #f36f6fee !important;
  transform: scale(1.1);
}

#navbar ul{
  list-style-type: none;
}

#navbar .link{
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: color .5s;
}

#navbar .link:hover{
  color: turquoise;
  transition: color .3s;
}

#navbar .link::after{
    content: '';
    display: block;
    width: 0;
    height: 3px;
    position: relative;
    background: turquoise;
    z-index: 1;
    transition: width .3s ease-in-out;
}

#navbar .link:hover::after{
    width: 100%;
}

#navbar .navbar-brand{
  background-image: url('../../assets/logo-negativo.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%;
}

#navbar .link:focus{
    color: turquoise !important;
}

#navbar .link:focus::after{
    width: 100% !important;
}

#navbar .active{
    color: turquoise !important;
}

#navbar .active::after{
    width: 100% !important;
}





</style>
