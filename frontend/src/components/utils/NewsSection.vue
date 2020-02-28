<template>

  <div id="newsection" class="container d-flex flex-row justify-content-center aling-content-center">

    <div class="r col-lg-11 d-flex flex-row justify-content-between aling-content-center">

    <div class="caixa col col-lg-8 mt-5 mb-3">

      <div class="container col-12 d-flex flex-row justify-content-between aling-content-center m-0">      
        <!-- <router-link to="#" class="text-decoration-none"> -->
          <span class="d-inline news-link-cards text-uppercase font-weight-bold text-dark h4 align-bottom">
            novidade
          </span> 

      </div>

      <Card :items="items" class="col-12"/>

    </div>
    <div class="d-none d-lg-block col-4 mt-5 mb-3">
      <LastNews :id_group="this.id_group" class="d-none d-lg-block col-12"/>
    </div>

 </div>

  </div>

</template>

<script>

import Card from './Card'
import LastNews from './LastNews'
import axios from 'axios'
import {config} from '../../config/index'

export default {
  name: "NewsSection",
   props:{
    id_group:Number
  },
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
    let id_group = this.id_group?parseInt(this.id_group):null
     axios.get(config.URL+'/sample/database/getPosts/'+ id_group).then((response) => {
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


</style>
