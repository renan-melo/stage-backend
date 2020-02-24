<template>
  <div id="news">
<Content/>
<NewsSection :id_group="this.$route.params.id"/>  </div>
</template>

 


<script>
import Content from '../../utils/Content.vue'
import NewsSection from '../../utils/NewsSection'

 export default {
    name: 'News',
    components:{
      Content,
      NewsSection,
    }
}
</script>

<style scoped>

</style>
