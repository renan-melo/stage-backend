<template>
  <div id="app">
    <NavBar v-if="!isCreateComputed"/>
    <router-view v-if="!isCreateComputed"/>
    <Footer v-if="!isCreateComputed"/>
    <CreatePost v-if="isCreateComputed"/>
  </div>
</template>

<script>
import NavBar from "./components/commons/NavBar";
import Footer from "./components/commons/Footer";
import CreatePost from "./components/views/createPost/CreatePost";
export default {
  name: "app",
  data(){
    return {
      isCreate:false
    }
  },
  methods:{
    alterCreate(){
      this.isCreate=!this.isCreate
    }
  },
  computed:{
  isCreateComputed(){
    return this.isCreate
  }
  },
  components: {
    NavBar,
    Footer,
    CreatePost
  }
};
</script>

<style>
/* #EAEAEA */
#app{
  background: rgb(255, 255, 255); 
  overflow: auto;
}
</style>
