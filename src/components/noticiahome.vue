<template>


    <div class="container col-12 col-lg-8">

      
      <h1 class="my-4 my-5">Noticias
        <hr>
      </h1>
<div class="d-none d-lg-block">
      <!-- <aside class="lateral col ">
<h1>Outras Notícias</h1>
<h2>Vídeo mais recente</h2>

<h2>Novidades no Glass</h2>
<p>O Google enfim revelou as especificações completas do Google Glass.</p>

<p>Além da surpresa do áudio, a tela montada a frente do olholçlççlçlçlçl do usuário também chamou atenção.a tela montada a frente do olho do usuário também chamou atenção.  a tela rio também chamou atenção.lémda surpresa do áudio, a tela montada a frente do olho do usuário também chamou atenção.lém da surpresa do áudio, a tela mon009o. </P>
</aside> -->  
</div>
  
 
      <Card :items="items"/>
     
     <br>

      <br><br> 

      <button @click="load" class="btn btn-primary">Carregar mais</button> 



    </div>

    
</template>

<script>

import Card from './Card'
export default {
  name: "noticiahome",
  components:{
    Card
  },
  methods:{
    load(){
      const items = this.items
      items.forEach((item,index) => {
      index < 3 ? this.items.push(item):null
      });
    }
  },
  data(){
    return{
      items:[
        {
        title:"fala memo",
        subtitle:"fala memo",
        text:"fala memo nois"
        },{
        title:"fala memo",
        subtitle:"fala memo",
        text:"fala memo nois"
        },{
        title:"fala memo",
        subtitle:"fala memo",
        text:"fala memo nois"
        }
      ]
    }
  }
}
</script>

<style scoped>
.row{
  background-color: rgb(255, 255, 255);
}
.lateral {
				display: block;
				width: 220px;
				float:right;
				background-color: #dddddd;
        padding: 16px;
        border-radius: 12px;
        }
			
			.lateral h1{
				font-family: 'fontelogo',sans-serif;
				font-size:20pt;
				color: #606060;
      }
      .lateral h2{
				background-color: #606060;
				font-size: 13pt;
				color: #ffffff;
				padding: 5px;
				}

.bg{
  background-color:rgb(255, 255, 255);
}
.fr{
  background-color:rgb(255, 174, 0);
}

.images {
border-radius: 15px;
}

</style>
