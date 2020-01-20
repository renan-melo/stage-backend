<template>

  <aside id="lastnews" class="px-0 pb-3">
    <div class="title d-flex justify-content-center py-2">
      <h5 class="text-uppercase text-white m-0 d-inline align-bottom font-weight-bold">mais lidas</h5>
    </div>
    <CardLastNews :items="items"/>
  </aside>

</template>

<script>
import CardLastNews from './CardLastNews'
import axios from 'axios'

export default {
    name:'LastNews',
    data(){
      return{
        items:[]
      }
    },
    mounted(){
     axios.get('http://localhost:3000/sample/database/getPostsView').then((response) => {

             this.items = response.data.map((item)=>{
               return{
                id:item.id,
                date:new Date(item.reg_date).toLocaleDateString(),
                img_card:item.img_card,
                title:item.title,
                path: '/content/'+item.id
               }
             }) 
      })
  },
    components:{
      CardLastNews
    }
}
</script>

<style scoped>

#lastnews {
  background: linear-gradient(to right, #414345, #232526); 
  border-radius: 10px;
}

#lastnews .title{
  background: #fe8c00; 
  background: linear-gradient(to right, #f83600, #fe8c00); 
  border-radius: 10px 10px 0 0;
}	

</style>