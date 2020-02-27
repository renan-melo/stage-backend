<template>
<div>

    <div class="banner">
        <Banner :item="item"/>
    </div>
    <div class="container py-5">
        <h2 class="h3 font-weight-bold">{{item.title}}</h2>
        <p class="font-italic">{{item.date}}</p>  
        <div class="row">
            <div class="col-lg-10 mb-4" v-html="item.content">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Banner from './Banner'

export default {
    name:'Content',
    components:{
        Banner
    },
    computed:{
        itemComputed(){
            return this.item
        }
    },
    mounted(){
        axios.get('http://stategames1-com-br.umbler.net/sample/database/getPost/'+this.$route.params.id).then((response) => {
             this.item = response.data[0] 
             const data = {
                 id:parseInt(this.$route.params.id),
                 qtd_view:this.item.qtd_view + 1
             }

             axios.post('http://stategames1-com-br.umbler.net/sample/database/addView',data).then((response) => {
              console.log(response);
                }) .catch(function (error) {
                    console.log(error);
                });
            })  
    },
    data(){
        return {
            item:{}
        }
    }
}

</script>

<style scoped>
    .banner{
        height: 60vh;
    }

</style>
