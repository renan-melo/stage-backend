<template class="credit">


    <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
    <div class="container text-center">
      
      <small>Copyright &copy; Renan Website Project</small>
      </div>

      <div class="">
    <ul  class="row p-0 d-flex justify-content-center">
          <li v-for="item in midia" :key="item.id" class="p-2 m-0 col-0">
             <a  :href="item.url">
              <i :class="'fab fa-'+item.name" ></i>
            </a>
          </li>
        </ul>
  
      </div>
      

  </footer>
    

  

</template>

<script>

export default {
  name: 'credit',
  data() {
    return{
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
        url:'https://www.instagram.com/?hl=pt-br'
      },
      ]
    }
    }
}
  
  

</script>

<style scoped>
i.fab{
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
  color:rgb(255, 255, 255);
}
.fa-instagram:hover {
  color: rgba(206, 59, 162, 0.733);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
.fa-twitter {
  color:rgb(255, 255, 255);
}
.fa-twitter:hover {
  color: rgb(0, 148, 247);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
.fa-youtube {
  color:rgb(255, 255, 255);
}
.fa-youtube:hover {
  color: rgba(252, 4, 4, 0.733);
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}

.row{
  list-style-type: none;
}


</style>
