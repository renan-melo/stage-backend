<template>

    <ul id="socialMedia" class="row justify-content-center align-items-center p-0 m-0 text-muted">
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
            isActive ? event.target.setAttribute("style", `color: ${color};`):event.target.removeAttribute("style")
        }
    },
    data() {
    return{
      media:[
      {
        icon:'facebook',
        url:'https://pt-br.facebook.com/',
        color:'#4064ad'
      },{
        icon:'twitter',
        url:'https://twitter.com/login?lang=pt',
        color:'#29A4DA'
      },{
        icon:'youtube',
        url:'https://www.youtube.com/?hl=pt&gl=BR',
        color:'#F70019'
      },{
        icon:'instagram',
        url:'https://www.instagram.com/?hl=pt-br',
        color:'#CF3587'
      },
      ]
    }
    }
}
</script>

<style scoped>

   #socialMedia li i{
       font-size: 16pt;
       color: rgba(255, 255, 255, 0.37);
       transition: transform .2s, color .2s;
   } 

   #socialMedia li {
      list-style-type: none !important;
   } 

   #socialMedia li i:hover{
     transform: scale(1.2);
   }

</style>