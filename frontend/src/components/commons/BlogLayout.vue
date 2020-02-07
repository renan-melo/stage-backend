<template >

<div class="a container-fluid p-0">
  <pagination-control class="pagination p-0 justify-content-center" :settings="settings" />
<pagination-page class="b " :settings="settings">
  <div class="c" slot="page" slot-scope="item">
    <div class="d ">{{item.originalEvent.data}}</div>
    <components class="e" :is="item.originalEvent.component"></components>
  </div>
</pagination-page>

</div>

</template>
<script>

import Page1 from '../../assets/information/nostalgia/Page1'
import Page2 from '../../assets/information/nostalgia/Page2'
import Page3 from '../../assets/information/nostalgia/Page3'
import Page4 from '../../assets/information/nostalgia/Page4'
import Page5 from '../../assets/information/nostalgia/Page5'
import Page6 from '../../assets/information/nostalgia/Page6'
import Page7 from '../../assets/information/nostalgia/Page7'
import Page8 from '../../assets/information/nostalgia/Page8'
import Page9 from '../../assets/information/nostalgia/Page9'
import Page10 from '../../assets/information/nostalgia/Page10'


export default {
    name:'BlogLayout',
    components: {
    Page1,Page2,Page3,Page4,Page5,Page6,Page7,Page8,Page9,Page10,
  },
    data: function () {
    return {
      arrayData: [
        {
          data: '',
          component:'Page1'
        },{
          data: '',
          component:'Page2'
        },{
          data: 'Page № 3',
          component:'Page3'
        },{
          data: 'Page № 4',
          component:'Page4'
        },{
          data: 'Page № 5',
          component:'Page5'
        },{
          data: 'Page № 6',
          component:'Page6'
        },{
          data: 'Page № 7',
          component:'Page7'
        },{
          data: 'Page № 8',
          component:'Page8'
        },{
          data: 'Page № 9',
          component:'Page9'
        },{
          data: 'Page № 10',
          component:'Page10'
        },
      ]
    }
  },
  computed: {
    settings: function () {
      return {
        arrayData: this.arrayData
      }
    }
  }
}
</script>

<style scoped>
/* .a{
  background-color: rgb(43, 89, 226);
  height: 100%;
  justify-content: space-around;
}
.b{
 background-color: rgb(208, 226, 43);
 display:inline-flex;
 justify-content: space-around;
}
.c{
  background-color: rgb(104, 226, 43);
  margin-top:-27%;
  display: flex;
  justify-content: space-around;
}
.d{
  background-color: rgb(43, 226, 183);
    display: inline;
    display: flex;
    justify-content: space-around;
    
}
.e{
  background-color: rgb(226, 43, 208);
  display: flex;
  justify-content: space-around;
  
} */

</style>