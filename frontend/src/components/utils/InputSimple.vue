<template>
  <div :class="'input-group mb-3 col-'+col" >
    <div>
      <span class="input-group-text">{{titleInput}}</span>
    </div>
    <input :type="type" class="form-control" required :placeholder="placeholder || ''" v-model="model" @input="previewValueEmit()">
   <div class="d-flex col-12 p-0">
      <slot></slot>
    </div>
  </div>  
</template>

<script>

export default {
    name:'InputSimple',
    props:{
      titleInput:String,
      type:String,
      placeholder:String,
      value:String,
      col:Number
    },
    methods:{
      previewValueEmit(){
       this.$emit('previewValueEmit',this.model)
      },
      istypeDate(){
        const dateCurrent = new Date().toLocaleDateString(),
              dateFormatted = dateCurrent.substring(6) +'-'+dateCurrent.substring(3,5)+'-'+dateCurrent.substring(0,2) 
        return this.type === 'date'?dateFormatted:''
      }
    },
    computed:{
      
    },
    data(){
      return {
        model:this.istypeDate()
      }
    }
}

</script>

<style scoped>
  span{
    border-top-right-radius: 0% !important;
    border-bottom-right-radius: 0% !important;
  }
</style>
