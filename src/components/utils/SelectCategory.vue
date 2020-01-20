<template>
<div class="input-group mb-3 col-4">
      <div class="input-group-prepend">
        <span class="input-group-text" >{{titleInput}}</span>
      </div>

      <select class="custom-select col-6" v-if="!isAddOrEditCategoryComputed" required v-model="category" @change="previewCategoryEmit($event)">>
        <option v-for="(category) in loadCategoriesComputed" :key="category.id" :value="category">{{category.name}}</option>
      </select>

      <input type="text" class="form-control col-6" v-if="isAddOrEditCategoryComputed" ref="inputCategoryText" v-model="category" @input="previewCategoryEmit($event)">
     
      <div class="input-group-prepend">

        <button :class="'btn btn-'+ button.class" v-for="(button,index) in alterbuttonsComputed" :key="index" type="button" @click="button.action()">
          <i :class="'fas fa-' + button.icon"></i>
        </button>

      </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name:'SelectCategory',
    props:{
      titleInput:String
    },
    methods:{
      previewCategoryEmit(event){
        if(event.type === 'change'){
          this.alterButtonsAction(['edit','delete','add']);
        }

      this.$emit('previewCategoryEmit',this.category)
      },
      loadCategories(selected = null){
        axios.get('http://localhost:3000/sample/database/getCategories').then((response) => {
            this.categories = response.data
            if(selected){
              this.category = this.categories.filter(category=>{
                return String(category.name).toUpperCase() === String(selected).toUpperCase()
              })[0]
            }
        })
      },
      alterButtonsAction(options){
        this.buttonsAction = this.buttons.filter(button =>{
          return options.indexOf(button.name) != -1 
        })
      },
      validateCategory(){
        const validate = this.categories.filter(category=>{
          return String(category.name).toUpperCase() === String(this.category).toUpperCase()
        })

        if(!this.category || String(this.category).trim() == ''){
            this.message = {
            text:'A Categoria não pode estar vazia!',
            type:'danger',
            success:false
          }
          return false
        }else if(validate.length > 0){
          this.message = {
            text:'A Categoria '+ this.category + ' já existe!',
            type:'danger',
            success:false
          }
          return false
        }else{
           this.message = {
            text:'A Categoria '+ this.category + ' foi adicionada com sucesso!',
            type:'success',
            success:true
          }
          return true
        }
      },
      add(){
        this.alterButtonsAction(['save','undo'])
        this.category =''
        this.isAddOrEdit = true
        this.$nextTick(() => this.$refs.inputCategoryText.focus())
      },
      edit(){
        this.alterButtonsAction(['save','undo'])
        this.idEdit = this.category.id
        this.category = this.category.name
        this.isAddOrEdit = true
        this.$nextTick(() => this.$refs.inputCategoryText.focus())
      },
      undo(){
        this.alterButtonsAction(['add'])
        this.isAddOrEdit = false
      },
      delete(){
        this.isAddOrEdit = false
        axios.post('http://localhost:3000/sample/database/deleteCategory',{id:this.category.id}).then(() => {
            this.alterButtonsAction(['add'])
            this.isAddOrEdit = false
            this.loadCategories()
        })
      },
      save(){
        const validation  = this.validateCategory(),
        params={}

        if(this.idEdit){
          params.url='updateCategory',
          params.data = {id:this.idEdit,name:this.category}
          this.idEdit=false
        }else{
          params.url='insertCategory',
          params.data = {name:this.category}
        }

        if(validation){
            axios.post('http://localhost:3000/sample/database/'+params.url,params.data).then(() => {
              this.alterButtonsAction(['edit','add','delete'])
              this.isAddOrEdit = false
              this.loadCategories(this.category)
              alert('Categoria adicionada/Editada com sucesso!')
          }).catch(function () {
              alert('Erro no servidor favor contactar o Administrador.')
          }); 
        }else{
           this.category =''
           alert(this.message.text)
           this.$nextTick(() => this.$refs.inputCategoryText.focus())
        }
        
      }
    },
    
    computed:{
      isAddOrEditCategoryComputed(){  
        return this.isAddOrEdit
      },
      alterbuttonsComputed(){  
        return this.buttonsAction
      },
      loadCategoriesComputed(){
        return this.categories
      },
    },
    mounted(){
      this.loadCategories()
    },
    data(){
      return {
        isAddOrEdit:false,
        categories:[],
        category:null,
        message:{},
        idEdit:null,
        buttons:[
          {
            name:'edit',
            icon:'edit',
            class:'warning',
            action:this.edit
          },{
            name:'save',
            icon:'save',
            class:'primary',
            action:this.save
          },{
            name:'delete',
            icon:'trash-alt',
            class:'danger',
            action:this.delete
          },{
            name:'add',
            icon:'plus',
            class:'success',
            action:this.add
          },{
            name:'undo',
            icon:'undo-alt',
            class:'dark',
            action:this.undo
          }
        ],
        buttonsAction:[
         {
            name:'add',
            icon:'plus',
            class:'success',
            action:this.add
          }],
      }
    }
}

</script>

<style scoped>
  button{
    width: 48px;
    height: 100%;
  }
</style>
