<template>

    <ul id="socialMedia" class="row justify-content-center align-items-center p-0 m-0">
        <li v-for="(item,index) in media" :key="index" class="px-1 m-0" >
            <a  :href="item.url">
                <i :class="'fab fa-'+item.icon" @mouseover="alterColor($event,item.color,true)" @mouseout="alterColor($event,item.color,false)" ></i>
            </a>
        </li>
    </ul>

</template>

<script>
export default {
    name:'SocialMedia',
    methods:{
        alterColor(event,color,isActive){   
            const timerTransition = 0.2
            isActive ? event.target.setAttribute("style", `color: ${color};transition:color ${timerTransition}s`):event.target.setAttribute("style", `color:#fff; transition:color ${timerTransition}s`)
        }
    },
    data() {
    return{
      media:[
      {
        icon:'facebook',
        url:'https://pt-br.facebook.com/',
        color:'#4d4bc5'
      },{
        icon:'twitter',
        url:'https://twitter.com/login?lang=pt',
        color:'#0094f7'
      },{
        icon:'youtube',
        url:'https://www.youtube.com/?hl=pt&gl=BR',
        color:'#fc0404bb'
      },{
        icon:'instagram',
        url:'https://www.instagram.com/?hl=pt-br',
        color:'#ce3ba2bb'
      },
      ]
    }
    }
}
</script>

<style scoped>

   #socialMedia li i{
       font-size: 16pt;
       color: #fff;
   } 

   #socialMedia ul {
      list-style-type: none;
   } 

   #socialMedia li i:hover{
     transform: scale(1.2);
     transition: transform .2s;
   }

</style>