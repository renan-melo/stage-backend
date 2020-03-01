<template>

  <footer id="footer" class=" container-fluid d-flex flex-column justify-content-center align-items-center py-4 text-white-50">
      <div class="container text-center">
        <p>Tecnologias - Vue       | Node      | MySql</p>
        <p> Detalhes   - Bootstrap | <a href="https://github.com/stanleygomes/nodevader"> NodeVader </a></p>
        <small>Desenvolvedor  - Renan Melo</small>
      </div>
      <SocialMedia class="footer my-2"/>
  </footer>
    
</template>

<script>
import SocialMedia from '../commons/SocialMedia'
export default {
  name: 'Footer',
  components:{
    SocialMedia
  }
}
</script>

<style scoped>

#footer{
  background-color: #000000;
}

</style>
