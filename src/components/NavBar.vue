<template>

  <nav id="navbar" class="navbar navbar-expand-lg p-0 py-3 py-md-2 py-md-1">

    <div class="container-fluid mr-8 justify-content-between align-items-center">
      
      <a class="navbar-brand ml-4 mx-0 text-white" href="#">
        <h5 class="m-0 align-middle">GameState</h5>
      </a>

      <button class="navbar-toggler navbar-dark" type="button " data-toggle="collapse"  data-target="#nav">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse col-12 col-lg-9 p-0 justify-content-between align-items-center" id="nav">

        <div class="col-12 col-lg-9">
          <ul class="row p-2 justify-content-between p-0 m-0">
            <li v-for="(item,index) in items" :key="index" class="nav-item nav-item-link p-0 py-2">
                  <router-link class="nav-link link text-left px-0" :to="item.path" >{{item.name}}</router-link>
            </li>
          </ul>
        </div>

        <SocialMedia class="col-12 col-lg-2"/>

      </div>

    </div>

  </nav>

</template>

<script>

import SocialMedia from './SocialMedia'

export default {
  name: "NavBar",
  components:{
    SocialMedia
  },
  data(){
    return{
      items:[
        {
          name:'home'.toUpperCase(),
          path:'/'
        },{
          name:'novidades'.toUpperCase(),
          path:'/news'
        },{
          name:'games'.toUpperCase(),
          path:'/games'
        },{
          name:'nostalgia'.toUpperCase(),
          path:'/nostalgia'
        },{
          name:'especial'.toUpperCase(),
          path:'/specials'
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

.link:focus{
    color: turquoise !important;
}

.link:focus::after{
    width: 100% !important;
}

</style>
