<template>
<div>

    <div class="banner">
        <Banner :item="item"/>
    </div>
    <div class="container py-5">
        <p class="font-italic">{{new Date(item.reg_date).toLocaleDateString()}}</p>  
        <h2 class="h3 font-weight-bold">{{item.title}}</h2>
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
import {config} from '../../config/index'

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
        axios.get(config.URL +'/sample/database/getPost/'+this.$route.params.id).then((response) => {
             this.item = response.data[0] 
             this.item.img_banner = require(`../../assets/img/Banner/${this.item.id}.jpg`)

             while (this.item.content.indexOf('<img src="h')>-1) {
                 this.item.content= this.item.content.replace('<img src="h','<img style="max-width: 100%;min-width: 100%;" src="h')
                 
             }
                
             const data = {
                 id:parseInt(this.$route.params.id),
                 qtd_view:this.item.qtd_view + 1
             }

             axios.post(config.URL +'/sample/database/addView',data).then(() => {
                 
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

    .img-content{
        max-width: 100%;
    }

</style>
