<template>

  <div id="newsection" class="container d-flex flex-row justify-content-center aling-content-center">

    <div class="col-lg-11 d-flex flex-row justify-content-between aling-content-center">

    <div class="col-8 mt-5 mb-3">

      <div class="container col-12 d-flex flex-row justify-content-between aling-content-center m-0">      
        <router-link to="#" class="text-decoration-none">
          <span class="d-inline news-link-cards text-uppercase font-weight-bold text-dark h4 align-bottom">
            novidade
          </span> 
        </router-link>
        <router-link to="#" class="text-decoration-none">
          <span class="d-inline news-link-cards text-uppercase font-weight-bold text-muted text-decoration-none h6 align-bottom">
            ver mais
          </span> 
        </router-link>
      </div>

      <Card :items="items" class="col-12"/>

    </div>
    <div class="col-4 mt-5 mb-3">
      <LastNews class="d-none d-lg-block col-12"/>
    </div>

 </div>

  </div>

</template>

<script>

import Card from '../../utils/Card'
import LastNews from '../../utils/LastNews'
import axios from 'axios'

export default {
  name: "NewsSection",
  components:{
    Card,
    LastNews
  },methods:{
    load(){
      const items = this.items
      items.forEach((item,index) => {
      index < 4 ? this.items.push(item):null
      });
    },
    scaleCards(){
      this.items.forEach((item,index) => {
      const isDivisor = Number.isInteger(index/3) 
      index > 2 && isDivisor ? item.scale = true:item.scale = false
      });
    }
  },created(){
       this.scaleCards()
  },mounted(){
     axios.get('http://localhost:3000/sample/database/getPosts').then((response) => {
             this.items = response.data.map((item)=>{
               return{
                id:item.id,
                date:new Date(item.reg_date).toLocaleDateString(),
                img_card:item.img_card,
                title:item.title,
                category:item.category,
                path: '/content/'+item.id
               }
             }) 
      })
  },
  data(){
    return{
      items:[]
    }
  }
}
</script>

<style scoped>
#newsection .news-link-cards:hover{
  color:crimson !important;
}
</style>
