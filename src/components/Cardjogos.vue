<template>
<div class="container">
  
  <hr class="mt-2 mb-5">

  <div class="row">

  <div v-for="(item,index) in items" :key="index" class="border border-dark p-4 col-lg-3">

        <div class=" px-1" >
          <a href="#" class="d-block mb-3 h-100">
            <img class="img-fluid img-thumbnail" src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300" alt="">
          </a>
        </div>
<div class="col">
          <h5 class="text-center my-0">{{item.title}}</h5>
        </div>
        
    </div>
  </div>
</div>

</template>

<script>
export default {
    name:'Cardjogos',
    props:{
     items:Array
    }
}
</script>

<style scoped>
.images {
border-radius: 15px;
}

</style>