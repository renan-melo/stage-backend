<template>
  <nav class="navbar navbar-expand-lg p-0 py-3 py-md-2 py-md-1">
    <div class="container-fluid mr-8 justify-content-between align-items-center">
      <a class="navbar-brand ml-4 mx-0" href="#">
        <h5 class="m-0 align-middle">GameState</h5>
        </a>
      <button
        class="navbar-toggler navbar-dark"
        type="button "
        data-toggle="collapse"
        data-target="#navbarSite"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse col-12 col-lg-9 p-0 justify-content-between align-items-center" id="navbarSite">

        <div class="col-12 col-lg-9">
        <ul  class="row p-2 justify-content-between p-0 m-0">
          <li v-for="item in menuItens" :key="item.id" class="nav-item p-0 py-2 col-lg-2 text-center">
            
            <router-link class="nav-link" :to="item.url" >{{item.name}}</router-link>
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
      menuItens:[
        {
          name:'home'.toUpperCase(),
          url:'/'
        },{
          name:'news'.toUpperCase(),
          url:'/news'
        },{
          name:'games'.toUpperCase(),
          url:'/games'
        },{
          name:'nostalgia'.toUpperCase(),
          url:'/nostalgia'
        },{
          name:'specials'.toUpperCase(),
          url:'/specials'
        }
      ],
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: rgb(0, 0, 0);
  
}
.row{
  list-style-type: none;

}

.container-fluid {
  background-color: rgb(0, 0, 0);
}
.navbar-brand {
  color: rgb(255, 255, 255);
  background-color: rgb(3, 3, 3);
  
}

.navbar-brand:hover {
  color: rgba(243, 111, 111, 0.932);
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.nav-link{
  color: rgba(241, 228, 228, 0.932);
  
}
 .nav-link:hover {
  color: rgba(161, 156, 156, 0.932); 
  
}


</style>
