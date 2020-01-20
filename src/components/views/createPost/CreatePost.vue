<template>
  <div id="createdPost">

    <h1 class="text-center text-white font-weight-bold p-5">GERADOR DE CONTEÚDO</h1>

    <form method="post" enctype="multipart/form-data" @submit.prevent="addPost()">

      <div class="input-group container-fluid d-flex justify-content-between">
        <InputSimple titleInput="Titulo" type="text" @previewValueEmit="previewTitle"/>
        <InputSimple titleInput="Data" type="date" value="2019-07-01" @previewValueEmit="previewDate"/>
        <SelectCategory titleInput="Categoria" @previewCategoryEmit="previewCategory"/>   
      </div>

      <div class="file-img input-group container-fluid d-flex justify-content-between col-12 mb-5">
        <FileImg titleInput="Imagem Card" type="card" @previewFiles="previewFiles">
          <Card :items="[itemAlterComputed]" ref="img_card"/>
        </FileImg>

        <FileImg titleInput="Imagem Banner"  type="banner" @previewFiles="previewFiles">
          <Banner :item="itemAlterComputed" ref="img_banner"/>
        </FileImg>
    </div>

    <vue-simplemde v-model="content" ref="markdownEditor" class="markdownEditor"/>

    <div class="input-group-prepend">
      <button class="btn btn-outline-secondary" type="submit" >add</button>
    </div>

    </form>
 
  </div>
</template>

<script>
 import VueSimplemde from 'vue-simplemde'
 import Card from '../../utils/Card'
 import Banner from '../../utils/Banner'
 import InputSimple from '../../utils/InputSimple'
 import SelectCategory from '../../utils/SelectCategory'
 import FileImg from '../../utils/FileImg'

import axios from 'axios'
  
 export default {
    name: 'CreatePost',
    methods:{
      previewFiles(data){
        if(data.type === 'card'){
          this.item.img_card =data.img 
        }else if(data.type === 'banner'){
          this.item.img_banner =data.img 
        }
      },
      previewTitle(title){
        this.item.title = title 
      },
      previewDate(data){
        const date = new Date(data)
        const isZero= t=>{
          return t<9?'0'.concat(t<31?t+1:t):t<31?t+1:t
        }
        this.item.date = isZero(date.getDate())+'/'+isZero(date.getMonth())+'/'+date.getFullYear()
      },
      previewCategory(category){
        this.item.category = category.name
        this.item.idCategory = category.id 
      },
     
      addPost(){
        
        this.item.content = this.$refs.markdownEditor.simplemde.options.previewRender(this.content);
      axios.post('http://localhost:3000/sample/database/savePost',{item:this.item}).then((response) => {
              console.log(response);
          }) .catch(function (error) {
              console.log(error);
          });
      }
    },
    computed:{
       itemAlterComputed(){ 
        return this.item
      }
    },
    mounted(){
      // this.loadCategories()
    },
    data(){
      return {
        title:null,
        category:null,
        date:new Date().toLocaleDateString(),
        content:null,
        item:{
                id:2,
                date:new Date().toLocaleDateString(),
                img_card:require('../../../assets/img-default.png'),
                img_banner:require('../../../assets/img-default.png'),
                title:'Titulo',
                category:'Categoria',
                idCategory:null,
                content:null,
                path: '#'
               }
      }
    },
    components: {
      VueSimplemde,
      Card,
      Banner,
      InputSimple,
      SelectCategory,
      FileImg
    }
}
</script>

<style>
  @import '~simplemde/dist/simplemde.min.css';
  
  #createdPost{
    background: #000428;  /* fallback for old browsers */
    background: linear-gradient(to right, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .file-img{
    height: 40vh;
  }

  .markdownEditor{
    background:#e9ecef;
  }
</style>
