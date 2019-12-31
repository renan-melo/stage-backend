<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/commons/NavBar";
import Footer from "./components/commons/Footer";
export default {
  name: "app",
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
#app{
  background: #EAEAEA; 
}
</style>
