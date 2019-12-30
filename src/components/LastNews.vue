<template>

  <div id="lastnews">
    <div v-for="(item,index) in items" :key="index">
      <aside>
        <h1>Outras Notícias</h1>
        <h5>{{item.title}}</h5>
        <p >{{item.subtitle}}</p>
        <p >{{item.text}}</p> 
      </aside>
      <aside>
        <h1>Outras Notícias</h1>
        <h5>{{item.title}}</h5>
        <p >{{item.subtitle}}</p>
        <p >{{item.text}}</p> 
      </aside>
      <aside>
        <h1>Outras Notícias</h1>
        <h5>{{item.title}}</h5>
        <p >{{item.subtitle}}</p>
        <p >{{item.text}}</p> 
      </aside>
  </div>
</div>


</template>

<script>
export default {
    name:'LastNews',
    props:{
     UL:Array
    },
    data(){
      return {
        items: [
          {
            uptitle:"Outras Notícias",
            title:"Novidades no Glass" ,
            subtitle:"O Google enfim revelou as especificações completas do Google Glass." ,
            text:"Além da surpresa do áudio, a tem chamou atençãote do olho do usuário também cha atençãote do olho do usuário também chamou atenção.  a telbmmhmga rio também chamou atenção.lémda surpresa do áudio, a tela montada a frente do olho do usuário também chamou atenção.lém da surpresa do áudio, a tela mon009o."
          },
        ]
      }
    }
}
</script>

<style scoped>

#lastnews aside {
  display: block;
  background-color: #dddddd;
  padding: 16px;
  border-radius: 12px;
}
			
#lastnews h1{
  font-family: 'fontelogo',sans-serif;
  font-size:20pt;
  color: #606060;
}

#lastnews h2{
  background-color: #606060;
  font-size: 13pt;
  color: #ffffff;
  padding: 5px;
}

</style>