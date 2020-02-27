<template>

<div class="container-fluid align-items-center p-0">
  <div class="card border align-items-center">
    <div class="card-body px-5">
      
      <div class="box p-5 text-center" style="height: auto">
        <h1 class="font-weight-light">Sonic The Hedgehog</h1>
        <h5>O grande mascote do Mega Drive que revolucionou os games de plataforma!</h5>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/J06663Njops" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="lead py-4">Nasce uma estrela! Sonic The Hedgehog chegava no Mega Drive em Junho de 1991 e é um dos jogos mais revolucionários da sua época. Com o Mega Drive já no mercado, a Sega então precisava de uma mascote com um forte apelo para representá-la, assim como Mario fazia com a sua rival Nintendo.</p>
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
  background: url('https://www.manteresting.com/wp-content/uploads/2018/07/83b9984ead2d23f95dfe35a2eef30317_287645.jpeg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
}
.box {
  background-color: rgba(255, 255, 255, 0.83);
  width:auto;
}
.text-title{
  background-color: rgba(96, 100, 100, 0.741)
}

</style>