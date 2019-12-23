<template>
<div>
  <div v-for="(item,index) in items" :key="index" class="bg media row justify-content-center align-items-center">

        <div class="p-0  col-6  d-flex justify-content-center align-items-center">
          <a class=" p-0   m-0" href="#">
            <img src="../assets/ffffff.jpg" alt="" class="images img-fluid p-2 col-md-10 col-lg-12 col-sm-5 align-self-center d-flex" >
          </a>
        </div>

        <div class="col">
          <h5>{{item.title}}</h5>
          <p >{{item.subtitle}}</p>
          <p >{{item.text}}</p> 
        </div>

  </div>
</div>

</template>

<script>
export default {
    name:'Card',
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