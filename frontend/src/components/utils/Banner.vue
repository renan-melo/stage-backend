<template>

 <div class="col-12 d-flex flex-column justify-content-end banner" >
      <div class="banner-img">
        <img :src="item.img_banner" height="100%" width= "100%" alt=""/>
      </div>
    
    <div class="banner-text d-flex flex-column h-100 col-12 justify-content-end ">

        <h1 class="mb-5 pb-5">{{item.title}}</h1>
     
      <div class="d-flex justify-content-start mb-3">
       
           <i class="far fa-bookmark ml-1"> {{item.category}}</i>
      </div>
    </div> 
    </div>
      
</template>

<script>

export default {
    name:'Banner',
    props:{
        item:Object
    }
}

</script>

<style scoped>
 .banner{
    position: relative;
    color: #fff;
    height: 100%;
  }

  .banner-text{
    position: relative;
    z-index: 1;
  }

  .banner-img{ 
    position: absolute;
    object-fit:cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .banner-img img{
        object-fit:cover;
        object-position: top;

  }

  .banner-img:after {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    object-fit:cover;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(3,3,3,.35);
    background-image: -webkit-gradient(linear,left top,left bottom,color-stop(44%,rgba(0,0,0,0)),to(#020202));
  }
</style>
