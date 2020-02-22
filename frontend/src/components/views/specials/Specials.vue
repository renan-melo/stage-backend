<template>
  <div id="specials">
    <Content/>
  <NewsSectionSpecials/>
  </div>
</template>

 


<script>
import Content from '../../utils/Content.vue'
import NewsSectionSpecials from '../specials/NewsSectionSpecials'

export default {
  name: 'Specials',
  components:{
    Content,
    NewsSectionSpecials,
  }
}
</script>

<style>

</style>
