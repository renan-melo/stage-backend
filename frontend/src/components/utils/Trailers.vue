<template>

  <div id="trailers" class="container-fluid">

    <div class="py-4">
      <h1 class="text-center text-white">Trailers </h1>
    </div>

    <div class="r row col-12 d-flex">
      <div class="e embed-responsive embed-responsive-16by9 col-lg-8 px-2">
        <iframe class="embed-responsive-item" :src="this.itemSelected.src" allowfullscreen></iframe>
      </div>
      <div class="col-md-4 text-white">
        <h3 class="my-4 ">{{this.itemSelected.title}}</h3>
        <p>{{this.itemSelected.text}}</p>
        <h3 class="my-3">Detalhes</h3>
        <ul>
          <li v-for="(detail,index) in this.itemSelected.details" :key="index">{{detail}}</li>
        </ul>
      </div>
    </div>

    <div class="col-12 d-flex justify-content-center">
      <h3 class="my-5 text-white">Assista Tambem...</h3>
    </div>
    
    <div class="col-12 row d-flex">
      <div v-for="(item,index) in this.items" :key="index" class="trailer-mini  col-md-3 col-sm-6 mb-5">
        <div class="embed-responsive embed-responsive-4by3">
          <iframe class="border border-dark embed-responsive-item" :src="item.src"></iframe>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

export default {
  name: 'Trailers',
  methods:{
    selectVideo(){
    
      const idRandomn = parseInt(Math.random() * (this.items.length - 1) + 1); 

      this.itemSelected = this.items.filter(item =>{
        return item.id === idRandomn?item:null
      })[0]

      this.items = this.items.filter(item => {
        if(item.id !== idRandomn){
          return item
        }
      })

    }
  },
  created(){
    this.selectVideo();
  },
  data(){
    return {
      itemSelected:{},
      items:[
        {
          id:1,
          src:'https://www.youtube.com/embed/2TR0gaG01do',
          title:'Hellblade 2',
          text:'Lançado em 2017, Hellblade: Senuas Sacrifice foi um dos títulos mais surpreendentes do ano, levando diversos prêmios para casa e gerando uma imensa hype para uma possível sequência. Após a compra da Ninja Theory pela Microsoft, integrando o Xbox Studios, o segundo jogo da franquia foi anunciado e Senuas Saga: Hellblade 2 ganhou um tenso teaser mostrando um grande avanço visual e uma excelente perspectiva para qual seria o primeiro título anunciado para a nova geração do Xbox,',
          details:['95% gostaram desse','lançamento: 8 de agosto de 2017','Motor: Unreal Engine']
        },{
          id:2,
          src:'https://www.youtube.com/embed/5vX-257ns6g',
          title:'Godfall 2',
          text:'Godfall é uma franquia de jogos inédita para PS5 da Counterplay Games publicada pela Gearbox Software, empresa conhecida pela franquia Borderlands. Anunciado durante o The Game Awards 2019 na noite desta quinta-feira (12), o jogo segue o formato de RPG de ação em terceira pessoa e é um dos primeiros títulos confirmados para a nova geração de consoles. ',
          details:['85% gostaram desse','lançamento: 1 de abril de 2019','Motor: Unreal Engine']
        },{
          id:3,
          src:'https://www.youtube.com/embed/h0KlMmIyefo',
          title:'Halo Wars 2',
          text:'Halo Wars 2 é um jogo de estratégia em tempo real desenvolvido pela 343 industries e Creative Assembly, e publicado pela Xbox Game Studios Exclusivamente para Xbox One e Windows 10 para o dia 21 de Fevereiro de 2017.',
          details:['99% gostaram desse','lançamento: 28 de março de 2016','Motor: Unreal Engine']
        },{
          id:4,
          src:'https://www.youtube.com/embed/0tUqIHwHDEc',
          title:'Xbox Scarlet',
          text:'A Microsoft realizou o evento X019 durante o último final de semana e Phil Spencer, comandante da divisão Xbox, revelou mais detalhes sobre a próxima geração do console, chamado atualmente de Projeto Scarlett. De acordo com o executivo, a empresa está trabalhando para não repetir os erros de lançamento do Xbox One e promete que o dispositivo chegará ao mercado com um preço competitivo.',
          details:['70% gostaram desse','lançamento: 16 de dezembro de 2015','Motor: Unreal Engine']
        },{
          id:5,
          src:'https://www.youtube.com/embed/9LrLM4Hvr9U',
          title:'Resident Evil 3: Nemesis',
          text:'DescriçãoResident Evil 3: Nemesis, conhecido no Japão como Biohazard 3: Last Escape, é um jogo eletrônico de survival horror desenvolvido e publicado pela Capcom, lançado originalmente para o PlayStation em 1999. É o terceiro jogo da franquia Resident Evil, e ocorre antes e após os acontecimentos de Resident Evil 2.',
          details:['50% gostaram desse','lançamento: 25 de fevereiro de 2020','Motor: Unreal Engine']
        }
      ]
    }
  }
}
  
  

</script>

<style scoped>

#trailers {
  background: #141E30;
  background: -webkit-linear-gradient(to right, #243B55, #141E30);  
  background: linear-gradient(to right, #243B55, #141E30);
}
@media screen and (max-width: 600px) {
  .r {
    padding: 0px;
    padding-left: 30px;
  }
  .e {
    height: 28vh;
  }
  .trailer-mini{
    height: 30vh;
    padding: 0px;
    padding-left: 30px;
    
  }
}

</style>
