<template>


<div class="container ">
    <div class="row row-expand-lg p-0 py-0 py-md-2 py-md-0">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="p-1">
          <div class="card-body p-0">
            <h5 class="card-title text-center"></h5>
            <form class="form-signin">
              <div class="form-label-group">
                <button class="btn btn-md btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                   <hr class="my-3">
                 <div class="input-group">
                 <input type="text" class="form-control" placeholder="Pesquisar..."> 
                 <span class="input-group-btn">
                <button class="btn btn-secondary" type="button">Ok</button>
              </span>
                </div>          
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

     



</template>

<script>

export default {
  name: 'menusearch',
  
}
</script>

<style scoped>


.row {
  
  background-color: rgba(0, 0, 0, 0.842);
}


</style>
