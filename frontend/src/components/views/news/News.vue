<template>
  <div id="news">
<Content/>
<NewsSectionNews/>
  </div>
</template>

 


<script>
import Content from '../../utils/Content.vue'
import NewsSectionNews from '../news/NewsSectionNews'

 export default {
    name: 'News',
    components:{
      Content,
      NewsSectionNews,
    }
}
</script>

<style scoped>

</style>
