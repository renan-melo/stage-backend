<template>

<div class="file-img input-group mb-3 col-6 mb-3">

    <div class="d-flex col-12 p-0">
      <div class="custom-file">
        <input type="file" required class="custom-file-input" id="file" ref="img" @change="previewFiles($event)">
        <label class="custom-file-label" for="file">{{titleInput}}</label>
      </div>
    </div>
    <div class="d-flex col-12 p-0">
      <slot></slot>
    </div>
    
  </div>  
</template>

<script>

export default {
    name:'FileImg',
    props:{
      titleInput:String,
      type:String
    },
    methods:{
    toBase64(file){
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      })
    },
      previewFiles(){
        this.toBase64(this.$refs.img.files[0]).then(img =>{
        setTimeout(()=>{
          this.$emit('previewFiles',{img:img,type:this.type})
        },5000)
      })
    }
    }
}

</script>

<style scoped>

</style>
