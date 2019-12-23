<template>

   <div id="carouselSite" class="carousel slide" data-ride="carousel">

      <ol class="carousel-indicators">
        <li data-target="#carouselSite" data-slide-to="a" class="active"></li> 
        <li data-target="#carouselSite" data-slide-to="1"></li> 
        <li data-target="#carouselSite" data-slide-to="2"></li> 
      </ol>


      <div class="carousel-inner">

        <div class="carousel-item active">

          <img src="../assets/f.jpg" class="img-fluid d-block">

          <div class="carousel-caption d-none d-md-block">
            <h3>Passear com a familia é bom demais</h3>
            <p> Depois de um belo passeio, nada melhor que brocar um Xtudão!!!</p>
          </div>
        </div>

        <div class="carousel-item ">

            <img src="../assets/ffff.jpg" class="img-fluid d-block">

            <div class="carousel-caption d-none d-md-block">
                <h3>Segredo da paz é curtir um belo por do sol</h3>
                <p> Depois ir na Pizzaria e pedir uma gigantesca Moda da casa com borda recheada!!!</p>
            </div>
        </div>

          <div class="carousel-item">

              <img src="../assets/fff.jpg" class="img-fluid d-block">
              <div class="carousel-caption d-none d-md-block">
                  <h3 class="text-dark">Uma noite agradavel tem que ter  vista para um chafariz</h3>
                  <p class="text-dark"> Depois pular no chafariz e correr da policia levando um Cachorro quente no bolso</p>
              </div>
          </div>
      </div>

      <a class="carousel-control-prev" href="#carouselSite" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carouselSite" role="button" data-slide="next">
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only">avançar</span>
        </a>
    </div>

  

</template>

<script>

export default {
  name: 'menusob',
  
}
</script>

<style scoped>

.container-fluid{
  
  background-color: rgb(204, 179, 179);
}
.nav {
  color: rgb(176, 164, 230)
}


</style>
