<template>

<div class="container-fluid align-items-center p-0">
  <div class="card border align-items-center">
    <div class="card-body px-5">
      
      <div class="box p-5 text-center" style="height: auto">
        <h1 class="font-weight-light">Super Mario World</h1>
        <h5>Lançado em 1990, é um dos mais famosos jogos do Mario, considerado como o melhor ou um dos melhores de todos o tempos. </h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ejwxrD4E6io" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="lead py-4">Super Mario World, originalmente chamado no Japão de Super Mario Bros. 4, é um jogo de plataforma desenvolvido e publicado pela Nintendo como um título que acompanhava o console Super Nintendo Entertainment System.</p>
      </div>

    </div>
  </div>
</div>

</template>

<script>

export default {
    name:'testComponent',
  }
    
</script>

<style scoped>

.card-body {
  background: url('https://sonicevollution.com/wp-content/uploads/2012/01/images_games_mega-drive_sonic-the-hedgehog-1_sonic-the-hedgehog1-1.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.box {
  background-color: rgba(255, 255, 255, 0.83);
  border-radius:220px;
  width:auto;
}
.text-title{
  background-color: rgba(96, 100, 100, 0.741)
}
.link{
  border-radius:50px;
}

</style>