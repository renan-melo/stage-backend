<template>

  <footer id="Footer" class="container-fluid d-flex flex-column justify-content-center align-items-center py-4 bg-dark text-white-50">
      <div class="container text-center">
        <small>Copyright &copy; Renan Website Project</small>
      </div>
      <SocialMedia class="my-2"/>
  </footer>
    
</template>

<script>
import SocialMedia from './SocialMedia'
export default {
  name: 'Footer',
  components:{
    SocialMedia
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
