<template>
  <nav class="navbar navbar-expand-lg p-0 py-3 py-md-2 py-md-1">
    <div class="container-fluid mr-8 justify-content-between align-items-center">
      <a class="navbar-brand ml-4 col-2" href="#">
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

      <div class="collapse navbar-collapse col-10 justify-content-between" id="navbarSite">

        <div class="col-9">
        <ul  class="row p-2 justify-content-between p-0 m-0">
          <li v-for="item in menuItens" :key="item.id" class="nav-item  col-lg-2 ">
            <a class="nav-link " :href="item.url">{{item.name}}</a>
          </li>
        </ul>
        </div>

<div class="col-lg-2">
        <ul  class="row p-2 justify-content-between p-0 m-0">
          <li v-for="item in midia" :key="item.id" class="p-0 m-0 col-3">
             <a  :href="item.url">
              <i :class="'fab fa-'+item.name" ></i>
            </a>
          </li>
         
        </ul>
 </div>
     


        
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data(){
    return{
      menuItens:[        
        {
          id:1,
          name:'jogos'.toUpperCase(),
          url:'#'
        },{
          id:2,
          name:'analise'.toUpperCase(),
          url:'#'
        },{
          id:3,
          name:'videos'.toUpperCase(),
          url:'#'
        },{
          id:4,
          name:'especiais'.toUpperCase(),
          url:'#'
        },{
          id:5,
          name:'eSPORTS'.toUpperCase(),
          url:'#'
        },
      ],
      
      midia:[
      {
        id:6,
        name:'facebook',
        url:'https://pt-br.facebook.com/'
      },{
        id:7,
        name:'twitter',
        url:'https://twitter.com/login?lang=pt'
      },{
        id:8,
        name:'youtube',
        url:'https://www.youtube.com/?hl=pt&gl=BR'
      },{
        id:9,
        name:'instagram',
        url:'https://www.instagram.com/?hl=pt-br',
      },
      ]
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
i.fab {
  font-size: 25px;
  
}
.fa-facebook {
  color:rgb(255, 255, 255);
  
}
.fa-facebook:hover {
  color: rgb(77, 75, 197);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
.fa-instagram {
  color:rgb(180, 175, 175);
}
.fa-instagram:hover {
  color: rgba(206, 59, 162, 0.733);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
.fa-facebook {
  color:rgb(180, 175, 175);
}
.fa-twitter {
  color:rgb(180, 175, 175);
}
.fa-twitter:hover {
  color: rgb(0, 148, 247);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
.fa-youtube {
  color:rgb(180, 175, 175);
}
.fa-youtube:hover {
  color: rgba(252, 4, 4, 0.733);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
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
